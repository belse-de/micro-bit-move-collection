# 1. Start - Hallo

## Aufgabe:
Zeige ein Symbol nach dem Einschalten an.

### Beschreibung:
Nach dem Einschalten des Roboters sollte ein Symbol angezeigt werden.
Du kannst das Symbol frei wählen.

## Benötigte Blöcke:
- Grundlagen/beim Start
- Grundlagen/zeige Symbol

---

# 2. Zeitschleife - Ein schlagendes Herz

## Aufgabe:
Zeige zwei Symbole nach dem Einschalten an, die sich abwechseln.

### Beschreibung:
Nach dem Einschalten des Roboters soll ein Sybol(zum Beispiel: großes Herz) angezeigt werden.
Nach einer Weile(zum Beispiel nach 200ms) soll ein anderes Symbol(zum Beispiel: kleines Herz) angezeigt werden.
Nach einer Weile(zum Beispiel nach 200ms) soll wieder das erste Symbol angezeigt werden.

Dies soll sich dauerhaft wiederholen.

#### Anmerkung
- 200ms ist eine Schreibweise für 200 Millisekunden.
- 1000 Millisekunden sind eine Sekunde.

## Zusätzlich Benötigte Blöcke:
- Grundlagen/dauerhaft
- Grundlagen/pausieren (ms)

---

# 3. NeoPixel - Es werde bunt
## Aufgabe:
Zeige zwei verschiedene Farben auf der LED-Leiste oben an.
Sie sollen abwechseln an und aus gehen, also blinken.

### Beschreibung:
- Die linke LED soll blau leuchten
- Die rechte LED soll rot leuchten
- Die mittlere LED soll lila/violet leuchten

#### Anmerkung
- Füge im "beim Start" Block "NeoPixel/setze strip auf NeoPixel mit **5** Pixeln und Modus RGB (GRB Format)" ein.
- Dieser Schritt sagt dem Programm, wie es mit den LED-Leiste kommunizieren soll und wie viele LEDs existieren.
- LED = Light Emitting Diode (Licht abstrahlende Diode)

## Zusätzlich Benötigte Blöcke:
- NeoPixel/(strip) anzeigen
- NeoPixel/(strip) ausschalten
- mehr/(strip) setze Farbe von NeoPixel (0) auf (rot)

---

# 4. Input - Knöpfe
## Aufgabe:
- Wenn der linke Knopf gedrückt wird, soll die linke LED leuchten.
- Wenn der rechte Knopf gedrückt wird, soll die rechte LED leuchten.
- Wenn beide Knöpfe gedrückt werden, soll die mittlere LED leuchten.
- Wenn kein Knopf gedrückt wird, soll keine LED leuchten.

### Beschreibung:
- Die linke LED soll blau leuchten.
- Die rechte LED soll rot leuchten.
- Die mittlere LED soll lila/violett leuchten.

## Zusätzlich Benötigte Blöcke:
- Logik/wenn (wahr) dann
- Eingabe/Knopf (A) ist geklickt

---

Von hier an ist der Simulator nicht mehr ausreichend.
Wir müssen die Programme mit dem Roboter ausprobieren.

---

# 5. Input - Lichtsensor
## Aufgabe:
Erweiter das vorherige Programm, so dass statt der Knöpfe die Lichtsensoren des Roboters verwendet werden.
Versuche die Blöcke "Knopf (A) ist geklickt", "Knopf (B) ist geklickt" und "Knopf (A + B) ist geklickt" durch passende Blöcke mit l_sensor und r_sensor zu ersetzen.

Bitte lass dir von einem Betreuer helfen, die benötigen Blöcke eizufügen.

#### Anmerkung
- In den "beim Start" Block "Fortgeschritten/Pins/mehr/ziehe den Pin **P15** auf nach oben" einfügen.
- In den "beim Start" Block "Fortgeschritten/Pins/mehr/ziehe den Pin **P16** auf nach oben" einfügen.
- Dieser Schritt sagt dem Programm, wie es mit den Lichtsensoren kommunizieren soll.

## Zusätzlich Benötigte Blöcke:
- Fortgeschritten/Pins/mehr/ziehe den Pin (P0) auf (nach oben)
- Fortgeschritten/Pins/digitale Werte von Pin (P0)
- Variablen/ändere (variable) auf (0)

## Startpunkt (JS):
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
    // Liest den momentanen Wert des rechten Liniensensors
    // ein
    r_sensor = pins.digitalReadPin(DigitalPin.P15)
    // Speichert den momentanen Wert des Liniensensors in
    // der Variable: "l_sensor"
    //
    // Liest den momentanen Wert des linken Liniensensors
    // ein
    l_sensor = pins.digitalReadPin(DigitalPin.P16)
    // Wenn der rechte Liniensensor Weiß sieht, schalte die
    // rechte LED auf Rot
    if (l_sensor == 0 && r_sensor == 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    }
    // Das vorherige Programm
    //
    // [...]
    //
})
```

---

# 6. Output - Motor
## Aufgabe:
Erweiter das vorherige Programm, so dass der Roboter der schwarzen Linie folgen kann.
Dafür musst du aus Servo:Lite die Blöcke für
Vorwärts(drive forward), Links(turn left) Rechts(turn right) und Stop(stop) an die richtigen Stellen in dein Programm einfügen.

### Beschreibung:
Überlege dir:
- Was "sehen" die Sensoren wenn der Roboter mittig auf der Linie steht?
- Was "sehen" die Sensoren wenn der Roboter gedreht auf der Linie steht?
- In welche Richtung muss der Roboter fahren wenn er mittig, gedreht oder senkrecht auf der Line steht?

## Zusätzlich Benötigte Blöcke:
- Servo:Lite/drive forward
- Servo:Lite/turn left
- Servo:Lite/turn right
- Servo:Lite/stop

---

Herzlichen Glückwunsch!

Wenn du die Aufgaben bis hier hin alle gemeistert hast sollte dein Roboter nun ohne Probleme einer schwarzen Line folgen können.
