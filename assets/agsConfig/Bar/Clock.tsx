import app from "ags/gtk4/app"
import GLib from "gi://GLib"
import Astal from "gi://Astal?version=4.0"
import Gtk from "gi://Gtk?version=4.0"
import Gdk from "gi://Gdk?version=4.0"
import { For, With, createBinding } from "ags"
import { createPoll } from "ags/time"
import { execAsync } from "ags/process"

export default function Clock({ format = "%H:%M"}) {
    const time = createPoll("", 1000, () => {
        return GLib.DateTime.new_now_local().format(format)!
    })

    return (
        <menubutton>
            <label label={time} />
            <popover>
                <Gtk.Calendar />
            </popover>
        </menubutton>
    )
}
