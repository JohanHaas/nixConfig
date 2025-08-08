import QtQuick 2.15
import QtQuick.Layouts 1.15
import QtQuick.Controls 2.15
import SddmComponents 2.0

Item {
    id: container
    height: Screen.height
    width: Screen.width
    z: 0

    // Hintergrundbild
    Image {
        id: background
        source: config.background // Direkter Pfad wie in hyprlock
        anchors.fill: parent
        fillMode: Image.PreserveAspectCrop
        asynchronous: true
    }

    Item {
        id: panel
        anchors.fill: parent

        // Uhrzeit (wie in hyprlock)
        Text {
            id: timeLabel
            text: Qt.formatTime(new Date(), "hh:mm")
            color: "#f2f3f4"
            font.family: "JetBrains Mono"
            font.pixelSize: Screen.height / 5.5
            anchors {
                horizontalCenter: parent.horizontalCenter
                verticalCenter: parent.verticalCenter
                verticalCenterOffset: -300
            }
        }

        // Datum (wie in hyprlock)
        Text {
            id: dateLabel
            text: Qt.formatDate(new Date(), "dddd, dd MMMM")
            color: "#f2f3f4"
            font.family: "JetBrains Mono"
            font.pixelSize: Screen.height / 15
            anchors {
                horizontalCenter: parent.horizontalCenter
                verticalCenter: parent.verticalCenter
                verticalCenterOffset: -200
            }
        }

        // Passwort-Eingabe (entsprechend hyprlock input-field)
        Rectangle {
            id: passwordContainer
            width: 500
            height: 100
            radius: 50
            color: Qt.rgba(0.09, 0.09, 0.14, 0.7)  // inner_color aus hyprlock
            anchors {
                horizontalCenter: parent.horizontalCenter
                verticalCenter: parent.verticalCenter
                verticalCenterOffset: 80  // position aus hyprlock
              }

            layer.enabled: true
            layer.smooth: true
            clip: true


            TextInput {
                id: passwordField
                anchors.fill: parent
                echoMode: TextInput.Password
                color: "#cad3f5"  // font_color aus hyprlock
                font.pixelSize: Screen.height / 25
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                passwordCharacter: "•"
                focus: true

                onAccepted: {
                    if (passwordField.text !== "") {
                        // Sitzung "hyprland" finden
                        let sessionIndex = -1;
                        for (let i = 0; i < sessionModel.rowCount(); i++) {
                            if (sessionModel.data(sessionModel.index(i, 0), sessionModel.NameRole) === "hyprland") {
                                sessionIndex = i;
                                break;
                            }
                        }
                        
                        if (sessionIndex >= 0) {
                            sddm.login("johan", passwordField.text, sessionIndex);
                        } else {
                            console.error("Hyprland-Sitzung nicht gefunden!");
                            sddm.login("johan", passwordField.text, 0);
                        }
                    }
                }
            }
        }

        // Fehlermeldung
        Text {
            id: errorLabel
            color: "#ff5555"
            font.pixelSize: 14
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: passwordContainer.bottom
                topMargin: 15
            }
        }
    }

    // Animationen (entsprechend hyprlock)
    Behavior on opacity {
        NumberAnimation {
            duration: 300
            easing.type: Easing.OutQuint  // Bezier aus hyprlock
        }
    }

    Component.onCompleted: {
        passwordField.forceActiveFocus();
    }
}
