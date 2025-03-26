

# 1. Start - Hallo

## Aufgabe:
Zeigen ein Symbol nach dem Einschalten an

### Beschreibung:
Nach dem einschalten des Roboters soll ein Sybol angezeigt werden.
Das Symbol kannst du frei waehlen.

## Benötigte Blöcke:
- Grundlagen/beim Start
- Grundlagen/zeige Symbol

## Lösungsbeispiel(JS):
```javascript
basic.showIcon(IconNames.Heart)
basic.forever(function () {

})
```

# 2. Zeitschleife - Ein schlagendes Herz

## Aufgabe:
Zeigen zwei Symbol nach dem Einschalten an,
die abwechseln.

### Beschreibung:
Nach dem einschalten des Roboters soll ein Sybol(zum Beispiel: groszes Herz) angezeigt werden.
Nach einer Weile(zum Beispiel 200ms) soll ein anderers Symbol(zum Beispiel: kleines Herz) angeseigen
Nach einer Weile(zum Beispiel 200ms) soll wieder das erste Symbol angeseigen

Diese soll sich dauerhaft wiederholen.

#### Anmerkung
- 200ms sind eine schreibweise fuer 200 Milisekunden.
- 1000 Milisekunden sind eine Sekunde.

## Zusätlich Benötigte Blöcke:
- Grundlagen/dauerhaft
- Grundlagen/pausieren (ms)


## Lösungsbeispiel(JS):
```javascript
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(200)
})
```

# 3. NeoPixel - Es werde bunt
## Aufgabe:
Zeigen zwei verschiede Farben auf der LED leiste oben an.
Sie sollen abwechseln an und aus gehen, also blinken.

### Beschreibung:
- die linke LED soll blau leuchten
- die rechte LED soll rot leuchten
- die mittlere LED soll lila/violet leuchten

#### Anmerkung
- In den "beim Start" Block "NeoPixel/setze strip auf NeoPixel mit **5** Pixeln und Modus RGB (GRB Format)" einfügen
- Dies ist Schritt erzählt dem Programm wie es mit den LEDs sprechen soll und wie viele existiern

## Zusätlich Benötigte Blöcke:
- NeoPixel/(strip) anzeigen
- NeoPixel/(strip) ausschalten
- mehr/(strip) setze Farbe von NeoPixel (0) auf (rot)


## Lösungsbeispiel(JS):
```javascript
// Initialisierung des Neopixel LED-Streifens im
// RGB-Modus mit 5 LEDs
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    // rechte LED
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    // linke LED
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
    basic.pause(200)
    strip.clear()
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
    basic.pause(200)
})


```
# Input - Buttons -> LED
## Aufgabe:
- Wenn der linke Knopf gedrückt wird soll die linke LED leuchten
- Wenn der rechte Knopf gedrückt wird soll die rechte LED leuchten
- Wenn beide Knöpfe gedrückt werden soll die mittlere LED leuchten
- Wenn kein Knopf gedrückt wird soll keine LED leuchten

### Beschreibung:
- die linke LED soll blau leuchten
- die rechte LED soll rot leuchten
- die mittlere LED soll lila/violet leuchten

#### Anmerkung
- In den "beim Start" Block "NeoPixel/setze strip auf NeoPixel mit **5** Pixeln und Modus RGB (GRB Format)" einfügen
- Dies ist Schritt erzählt dem Programm wie es mit den LEDs sprechen soll und wie viele existiern

## Zusätlich Benötigte Blöcke:
- Logik/wenn (wahr) dann
- Eingabe/Knopf (A) ist geklickt

## Lösungsbeispiel(JS):
```javascript
// Initialisierung des Neopixel LED-Streifens im
// RGB-Modus mit 5 LEDs
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    strip.clear()
    if (input.buttonIsPressed(Button.AB)) {
        // mittlere LED
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    } else if (input.buttonIsPressed(Button.A)) {
        // rechte LED
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else if (input.buttonIsPressed(Button.B)) {
        // linke LED
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    }
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
})
```

---

Vonhieran ist der Simulator nicht mehr ausreichend.
Wir müssen es auf dem Roboter austesten.

---

# Input - Lichtsensor -> LED
## Aufgabe:
Erweiter das vorherige Programm, so dass statt der Knöpfe die Lichtsensoren des Roboters verwendet werden.
Versuche die "Knopf (A) ist geklickt", "Knopf (B) ist geklickt" und "Knopf (A + B) ist geklickt" durch passende Blöcke mit l_sensor und r_sensor zu ersätzen.

Lass dir bitte von deinem Betreuer die nötigen Blöcke einfügen.

#### Anmerkung
- In den "beim Start" Block "Fortgeschritten/Pins/mehr/ziehe den Pin **P15** auf nach oben" einfügen
- In den "beim Start" Block "Fortgeschritten/Pins/mehr/ziehe den Pin **P16** auf nach oben" einfügen
- Dies ist Schritt erzählt dem Programm wie es mit den Lichtsensoren sprechen soll und wie viele existiern

## Zusätlich Benötigte Blöcke:
- Fortgeschritten/Pins/mehr/ziehe den Pin (P0) auf (nach oben)
- Fortgeschritten/Pins/digitale Werte von Pin (P0)
- Variablen/ändere (variable) auf (0)

## Startpunkt(JS):
```javascript
let l_sensor = 0
let r_sensor = 0
// Initialisierung des rechten Liniensensors
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
// Initialisierung des linken Liniensensors
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
// Initialisierung des Neopixel LED-Streifens im
// RGB-Modus mit 5 LEDs
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    // Speichert den momentanen Wert des Liniensensors in
    // der Variable: "r_sensor"
    //
    // Ließt den momentanen Wert des rechten Liniensensors
    // ein
    r_sensor = pins.digitalReadPin(DigitalPin.P15)
    // Speichert den momentanen Wert des Liniensensors in
    // der Variable: "l_sensor"
    //
    // Ließt den momentanen Wert des rechten Liniensensors
    // ein
    l_sensor = pins.digitalReadPin(DigitalPin.P16)
    // Wenn der rechte Liniensensor Weiß sieht schalte die
    // rechte LED auf Rot
    //
    // ansonsten schalte sie auf schwarz(aus)
    if (l_sensor == 0 && r_sensor == 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    }


    // Das vorherige Programm
    strip.clear()
    if (input.buttonIsPressed(Button.AB)) {
        // mittlere LED
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    } else if (input.buttonIsPressed(Button.A)) {
        // rechte LED
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else if (input.buttonIsPressed(Button.B)) {
        // linke LED
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    }
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
})
```

## Lösungsbeispiel(JS):
```javascript
let l_sensor = 0
let r_sensor = 0
// Initialisierung des rechten Liniensensors
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
// Initialisierung des linken Liniensensors
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
// Initialisierung des Neopixel LED-Streifens im
// RGB-Modus mit 5 LEDs
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    strip.clear()
    // Speichert den momentanen Wert des Liniensensors in
    // der Variable: "r_sensor"
    //
    // Ließt den momentanen Wert des rechten Liniensensors
    // ein
    r_sensor = pins.digitalReadPin(DigitalPin.P15)
    // Speichert den momentanen Wert des Liniensensors in
    // der Variable: "l_sensor"
    //
    // Ließt den momentanen Wert des rechten Liniensensors
    // ein
    l_sensor = pins.digitalReadPin(DigitalPin.P16)
    if (l_sensor == 1 && r_sensor == 1) {
        // mittlere LED
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    } else if (l_sensor == 0 && r_sensor == 1) {
        // rechte LED
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else if (l_sensor == 1 && r_sensor == 0) {
        // linke LED
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    } else {

    }
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
})
```


# output - Lichtsensor -> Motor
## Aufgabe:
Erweiter das vorherige Programm, so dass der Roboter der schwarzen Linie folgen kann.
Dafür musst du aus Servo:Lite die Blöcke für
Vorwärts(drive forward), Links(turn left) Rechts(turn right) und Stop(stop) an die richtigen Stellen in dein Programm einfügen.

### Beschreibung:
Überlege dir:
- Was "sehen" die Sensoren wenn der Roboter mittig auf der Linie steht?
- Was "sehen" die Sensoren wenn der Roboter gedreht auf der Linie steht?
- In welche Richtung muss der Roboter fahren wenn er mittig, gedreht oder senkrecht auf der Line steht?

## Zusätlich Benötigte Blöcke:
- Servo:Lite/drive forward
- Servo:Lite/turn left
- Servo:Lite/turn right
- Servo:Lite/stop

## Lösungsbeispiel(JS):

```javascript
let l_sensor = 0
let r_sensor = 0
// Initialisierung des rechten Liniensensors
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
// Initialisierung des linken Liniensensors
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
// Initialisierung des Neopixel LED-Streifens im
// RGB-Modus mit 5 LEDs
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    strip.clear()
    // Speichert den momentanen Wert des Liniensensors in
    // der Variable: "r_sensor"
    //
    // Ließt den momentanen Wert des rechten Liniensensors
    // ein
    r_sensor = pins.digitalReadPin(DigitalPin.P15)
    // Speichert den momentanen Wert des Liniensensors in
    // der Variable: "l_sensor"
    //
    // Ließt den momentanen Wert des rechten Liniensensors
    // ein
    l_sensor = pins.digitalReadPin(DigitalPin.P16)
    if (l_sensor == 1 && r_sensor == 1) {
        // mittlere LED
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
        kitronik_servo_lite.forward()
    } else if (l_sensor == 0 && r_sensor == 1) {
        // rechte LED
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        kitronik_servo_lite.left()
    } else if (l_sensor == 1 && r_sensor == 0) {
        // linke LED
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        kitronik_servo_lite.right()
    } else {
        kitronik_servo_lite.stop()
    }
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
})
```
