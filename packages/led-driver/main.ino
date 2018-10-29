#include <noise.h>
#include <bitswap.h>
#include <fastspi_types.h>
#include <pixelset.h>
#include <fastled_progmem.h>
#include <led_sysdefs.h>
#include <hsv2rgb.h>
#include <fastled_delay.h>
#include <colorpalettes.h>
#include <color.h>
#include <fastspi_ref.h>
#include <fastspi_bitbang.h>
#include <controller.h>
#include <fastled_config.h>
#include <colorutils.h>
#include <chipsets.h>
#include <pixeltypes.h>
#include <fastspi_dma.h>
#include <fastpin.h>
#include <fastspi_nop.h>
#include <platforms.h>
#include <lib8tion.h>
#include <cpp_compat.h>
#include <fastspi.h>
#include <FastLED.h>
#include <dmx.h>
#include <power_mgt.h>

#define LED_PIN 7
#define INPUT_PIN 10
#define FOG_OUTPUT 12
#define NUM_LEDS 300
#define LED_TYPE TM1809
#define COLOR_ORDER GRB

CRGB leds[NUM_LEDS];

bool isBrightening = true;
bool isFlashOn = false;
bool isStopped = false;
bool chaserRemainder = 0;

void setup()
{
    Serial.begin(9600);
    pinMode(INPUT_PIN, INPUT);
    pinMode(FOG_OUTPUT, OUTPUT);

    // Turn off fog when starting
    digitalWrite(FOG_OUTPUT, HIGH);

    // Set up LEDs
    FastLED.addLeds<LED_TYPE, LED_PIN, COLOR_ORDER>(leds, NUM_LEDS);
}

void loop()
{
    int delayTime;
    int inputStatus = digitalRead(INPUT_PIN);

    Serial.print("inputStatus ");
    Serial.println(inputStatus);

    if (inputStatus == HIGH)
    {
        startFog();
        delayTime = glowingLights();
    }
    else
    {
        delayTime = alternatingLights();
    }

    delay(delayTime);
}

int alternatingLights()
{
    Serial.println("alternatingLights");
    for (int led = 0; led < NUM_LEDS; led++)
    {
        leds[led] = led % 2 == chaserRemainder ? CRGB::Red : CRGB::Black;
    }

    // flip on next play
    chaserRemainder ^= 1;

    FastLED.show();

    // return how long this should delay
    return 1000;
}

void startFog()
{
    digitalWrite(FOG_OUTPUT, LOW);
    delay(100);
    digitalWrite(FOG_OUTPUT, HIGH);
}

void fadeall()
{
    for (int i = 0; i < NUM_LEDS; i++)
    {
        leds[i].nscale8(254);
    }
}

int glowingLights()
{
    Serial.println("glowingLights");
    static uint8_t hue = 0;

    // First slide the led in one direction
    for (int i = 0; i < NUM_LEDS; i++)
    {
        // Set the i'th led to red
        leds[i] = CHSV(hue++, 255, 255);
        // Show the leds
        FastLED.show();
        // now that we've shown the leds, reset the i'th led to black
        // leds[i] = CRGB::Black;
        fadeall();
        // Wait a little bit before we loop around and do it again
        delay(5);
    }

    // Now go in the other direction.
    for (int i = (NUM_LEDS)-1; i >= 0; i--)
    {
        // Set the i'th led to red
        leds[i] = CHSV(hue++, 255, 255);
        // Show the leds
        FastLED.show();
        // now that we've shown the leds, reset the i'th led to black
        // leds[i] = CRGB::Black;
        fadeall();
        // Wait a little bit before we loop around and do it again
        delay(5);
    }

    return 1;
}

void reset()
{
    FastLED.clear();
    FastLED.show();
}

void simpleFlash()
{
    if (isFlashOn)
    {
        fill_solid(leds, NUM_LEDS, CRGB::Red);
    }
    else
    {
        FastLED.clear();
    }

    isFlashOn = !isFlashOn;
}
