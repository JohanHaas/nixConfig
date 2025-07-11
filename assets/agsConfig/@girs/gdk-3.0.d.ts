/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./cairo.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Gdk?version=3.0' {
    // Module dependencies
    import type cairo from 'cairo';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';

    export namespace Gdk {
        /**
         * Gdk-3.0
         */

        /**
         * An enumeration describing the way in which a device
         * axis (valuator) maps onto the predefined valuator
         * types that GTK+ understands.
         *
         * Note that the X and Y axes are not really needed; pointer devices
         * report their location via the x/y members of events regardless. Whether
         * X and Y are present as axes depends on the GDK backend.
         */

        /**
         * An enumeration describing the way in which a device
         * axis (valuator) maps onto the predefined valuator
         * types that GTK+ understands.
         *
         * Note that the X and Y axes are not really needed; pointer devices
         * report their location via the x/y members of events regardless. Whether
         * X and Y are present as axes depends on the GDK backend.
         */
        export namespace AxisUse {
            export const $gtype: GObject.GType<AxisUse>;
        }

        enum AxisUse {
            /**
             * the axis is ignored.
             */
            IGNORE,
            /**
             * the axis is used as the x axis.
             */
            X,
            /**
             * the axis is used as the y axis.
             */
            Y,
            /**
             * the axis is used for pressure information.
             */
            PRESSURE,
            /**
             * the axis is used for x tilt information.
             */
            XTILT,
            /**
             * the axis is used for y tilt information.
             */
            YTILT,
            /**
             * the axis is used for wheel information.
             */
            WHEEL,
            /**
             * the axis is used for pen/tablet distance information. (Since: 3.22)
             */
            DISTANCE,
            /**
             * the axis is used for pen rotation information. (Since: 3.22)
             */
            ROTATION,
            /**
             * the axis is used for pen slider information. (Since: 3.22)
             */
            SLIDER,
            /**
             * a constant equal to the numerically highest axis value.
             */
            LAST,
        }
        /**
         * A set of values describing the possible byte-orders
         * for storing pixel values in memory.
         */

        /**
         * A set of values describing the possible byte-orders
         * for storing pixel values in memory.
         */
        export namespace ByteOrder {
            export const $gtype: GObject.GType<ByteOrder>;
        }

        enum ByteOrder {
            /**
             * The values are stored with the least-significant byte
             *   first. For instance, the 32-bit value 0xffeecc would be stored
             *   in memory as 0xcc, 0xee, 0xff, 0x00.
             */
            LSB_FIRST,
            /**
             * The values are stored with the most-significant byte
             *   first. For instance, the 32-bit value 0xffeecc would be stored
             *   in memory as 0x00, 0xff, 0xee, 0xcc.
             */
            MSB_FIRST,
        }
        /**
         * Specifies the crossing mode for #GdkEventCrossing.
         */

        /**
         * Specifies the crossing mode for #GdkEventCrossing.
         */
        export namespace CrossingMode {
            export const $gtype: GObject.GType<CrossingMode>;
        }

        enum CrossingMode {
            /**
             * crossing because of pointer motion.
             */
            NORMAL,
            /**
             * crossing because a grab is activated.
             */
            GRAB,
            /**
             * crossing because a grab is deactivated.
             */
            UNGRAB,
            /**
             * crossing because a GTK+ grab is activated.
             */
            GTK_GRAB,
            /**
             * crossing because a GTK+ grab is deactivated.
             */
            GTK_UNGRAB,
            /**
             * crossing because a GTK+ widget changed
             *   state (e.g. sensitivity).
             */
            STATE_CHANGED,
            /**
             * crossing because a touch sequence has begun,
             *   this event is synthetic as the pointer might have not left the window.
             */
            TOUCH_BEGIN,
            /**
             * crossing because a touch sequence has ended,
             *   this event is synthetic as the pointer might have not left the window.
             */
            TOUCH_END,
            /**
             * crossing because of a device switch (i.e.
             *   a mouse taking control of the pointer after a touch device), this event
             *   is synthetic as the pointer didn’t leave the window.
             */
            DEVICE_SWITCH,
        }
        /**
         * Predefined cursors.
         *
         * Note that these IDs are directly taken from the X cursor font, and many
         * of these cursors are either not useful, or are not available on other platforms.
         *
         * The recommended way to create cursors is to use gdk_cursor_new_from_name().
         */

        /**
         * Predefined cursors.
         *
         * Note that these IDs are directly taken from the X cursor font, and many
         * of these cursors are either not useful, or are not available on other platforms.
         *
         * The recommended way to create cursors is to use gdk_cursor_new_from_name().
         */
        export namespace CursorType {
            export const $gtype: GObject.GType<CursorType>;
        }

        enum CursorType {
            /**
             * ![](X_cursor.png)
             */
            X_CURSOR,
            /**
             * ![](arrow.png)
             */
            ARROW,
            /**
             * ![](based_arrow_down.png)
             */
            BASED_ARROW_DOWN,
            /**
             * ![](based_arrow_up.png)
             */
            BASED_ARROW_UP,
            /**
             * ![](boat.png)
             */
            BOAT,
            /**
             * ![](bogosity.png)
             */
            BOGOSITY,
            /**
             * ![](bottom_left_corner.png)
             */
            BOTTOM_LEFT_CORNER,
            /**
             * ![](bottom_right_corner.png)
             */
            BOTTOM_RIGHT_CORNER,
            /**
             * ![](bottom_side.png)
             */
            BOTTOM_SIDE,
            /**
             * ![](bottom_tee.png)
             */
            BOTTOM_TEE,
            /**
             * ![](box_spiral.png)
             */
            BOX_SPIRAL,
            /**
             * ![](center_ptr.png)
             */
            CENTER_PTR,
            /**
             * ![](circle.png)
             */
            CIRCLE,
            /**
             * ![](clock.png)
             */
            CLOCK,
            /**
             * ![](coffee_mug.png)
             */
            COFFEE_MUG,
            /**
             * ![](cross.png)
             */
            CROSS,
            /**
             * ![](cross_reverse.png)
             */
            CROSS_REVERSE,
            /**
             * ![](crosshair.png)
             */
            CROSSHAIR,
            /**
             * ![](diamond_cross.png)
             */
            DIAMOND_CROSS,
            /**
             * ![](dot.png)
             */
            DOT,
            /**
             * ![](dotbox.png)
             */
            DOTBOX,
            /**
             * ![](double_arrow.png)
             */
            DOUBLE_ARROW,
            /**
             * ![](draft_large.png)
             */
            DRAFT_LARGE,
            /**
             * ![](draft_small.png)
             */
            DRAFT_SMALL,
            /**
             * ![](draped_box.png)
             */
            DRAPED_BOX,
            /**
             * ![](exchange.png)
             */
            EXCHANGE,
            /**
             * ![](fleur.png)
             */
            FLEUR,
            /**
             * ![](gobbler.png)
             */
            GOBBLER,
            /**
             * ![](gumby.png)
             */
            GUMBY,
            /**
             * ![](hand1.png)
             */
            HAND1,
            /**
             * ![](hand2.png)
             */
            HAND2,
            /**
             * ![](heart.png)
             */
            HEART,
            /**
             * ![](icon.png)
             */
            ICON,
            /**
             * ![](iron_cross.png)
             */
            IRON_CROSS,
            /**
             * ![](left_ptr.png)
             */
            LEFT_PTR,
            /**
             * ![](left_side.png)
             */
            LEFT_SIDE,
            /**
             * ![](left_tee.png)
             */
            LEFT_TEE,
            /**
             * ![](leftbutton.png)
             */
            LEFTBUTTON,
            /**
             * ![](ll_angle.png)
             */
            LL_ANGLE,
            /**
             * ![](lr_angle.png)
             */
            LR_ANGLE,
            /**
             * ![](man.png)
             */
            MAN,
            /**
             * ![](middlebutton.png)
             */
            MIDDLEBUTTON,
            /**
             * ![](mouse.png)
             */
            MOUSE,
            /**
             * ![](pencil.png)
             */
            PENCIL,
            /**
             * ![](pirate.png)
             */
            PIRATE,
            /**
             * ![](plus.png)
             */
            PLUS,
            /**
             * ![](question_arrow.png)
             */
            QUESTION_ARROW,
            /**
             * ![](right_ptr.png)
             */
            RIGHT_PTR,
            /**
             * ![](right_side.png)
             */
            RIGHT_SIDE,
            /**
             * ![](right_tee.png)
             */
            RIGHT_TEE,
            /**
             * ![](rightbutton.png)
             */
            RIGHTBUTTON,
            /**
             * ![](rtl_logo.png)
             */
            RTL_LOGO,
            /**
             * ![](sailboat.png)
             */
            SAILBOAT,
            /**
             * ![](sb_down_arrow.png)
             */
            SB_DOWN_ARROW,
            /**
             * ![](sb_h_double_arrow.png)
             */
            SB_H_DOUBLE_ARROW,
            /**
             * ![](sb_left_arrow.png)
             */
            SB_LEFT_ARROW,
            /**
             * ![](sb_right_arrow.png)
             */
            SB_RIGHT_ARROW,
            /**
             * ![](sb_up_arrow.png)
             */
            SB_UP_ARROW,
            /**
             * ![](sb_v_double_arrow.png)
             */
            SB_V_DOUBLE_ARROW,
            /**
             * ![](shuttle.png)
             */
            SHUTTLE,
            /**
             * ![](sizing.png)
             */
            SIZING,
            /**
             * ![](spider.png)
             */
            SPIDER,
            /**
             * ![](spraycan.png)
             */
            SPRAYCAN,
            /**
             * ![](star.png)
             */
            STAR,
            /**
             * ![](target.png)
             */
            TARGET,
            /**
             * ![](tcross.png)
             */
            TCROSS,
            /**
             * ![](top_left_arrow.png)
             */
            TOP_LEFT_ARROW,
            /**
             * ![](top_left_corner.png)
             */
            TOP_LEFT_CORNER,
            /**
             * ![](top_right_corner.png)
             */
            TOP_RIGHT_CORNER,
            /**
             * ![](top_side.png)
             */
            TOP_SIDE,
            /**
             * ![](top_tee.png)
             */
            TOP_TEE,
            /**
             * ![](trek.png)
             */
            TREK,
            /**
             * ![](ul_angle.png)
             */
            UL_ANGLE,
            /**
             * ![](umbrella.png)
             */
            UMBRELLA,
            /**
             * ![](ur_angle.png)
             */
            UR_ANGLE,
            /**
             * ![](watch.png)
             */
            WATCH,
            /**
             * ![](xterm.png)
             */
            XTERM,
            /**
             * last cursor type
             */
            LAST_CURSOR,
            /**
             * Blank cursor. Since 2.16
             */
            BLANK_CURSOR,
            /**
             * type of cursors constructed with
             *   gdk_cursor_new_from_pixbuf()
             */
            CURSOR_IS_PIXMAP,
        }
        /**
         * A pad feature.
         */

        /**
         * A pad feature.
         */
        export namespace DevicePadFeature {
            export const $gtype: GObject.GType<DevicePadFeature>;
        }

        enum DevicePadFeature {
            /**
             * a button
             */
            BUTTON,
            /**
             * a ring-shaped interactive area
             */
            RING,
            /**
             * a straight interactive area
             */
            STRIP,
        }
        /**
         * Indicates the specific type of tool being used being a tablet. Such as an
         * airbrush, pencil, etc.
         */

        /**
         * Indicates the specific type of tool being used being a tablet. Such as an
         * airbrush, pencil, etc.
         */
        export namespace DeviceToolType {
            export const $gtype: GObject.GType<DeviceToolType>;
        }

        enum DeviceToolType {
            /**
             * Tool is of an unknown type.
             */
            UNKNOWN,
            /**
             * Tool is a standard tablet stylus.
             */
            PEN,
            /**
             * Tool is standard tablet eraser.
             */
            ERASER,
            /**
             * Tool is a brush stylus.
             */
            BRUSH,
            /**
             * Tool is a pencil stylus.
             */
            PENCIL,
            /**
             * Tool is an airbrush stylus.
             */
            AIRBRUSH,
            /**
             * Tool is a mouse.
             */
            MOUSE,
            /**
             * Tool is a lens cursor.
             */
            LENS,
        }
        /**
         * Indicates the device type. See [above][GdkDeviceManager.description]
         * for more information about the meaning of these device types.
         */

        /**
         * Indicates the device type. See [above][GdkDeviceManager.description]
         * for more information about the meaning of these device types.
         */
        export namespace DeviceType {
            export const $gtype: GObject.GType<DeviceType>;
        }

        enum DeviceType {
            /**
             * Device is a master (or virtual) device. There will
             *                          be an associated focus indicator on the screen.
             */
            MASTER,
            /**
             * Device is a slave (or physical) device.
             */
            SLAVE,
            /**
             * Device is a physical device, currently not attached to
             *                            any virtual device.
             */
            FLOATING,
        }
        /**
         * Used in #GdkDragContext to the reason of a cancelled DND operation.
         */

        /**
         * Used in #GdkDragContext to the reason of a cancelled DND operation.
         */
        export namespace DragCancelReason {
            export const $gtype: GObject.GType<DragCancelReason>;
        }

        enum DragCancelReason {
            /**
             * There is no suitable drop target.
             */
            NO_TARGET,
            /**
             * Drag cancelled by the user
             */
            USER_CANCELLED,
            /**
             * Unspecified error.
             */
            ERROR,
        }
        /**
         * Used in #GdkDragContext to indicate the protocol according to
         * which DND is done.
         */

        /**
         * Used in #GdkDragContext to indicate the protocol according to
         * which DND is done.
         */
        export namespace DragProtocol {
            export const $gtype: GObject.GType<DragProtocol>;
        }

        enum DragProtocol {
            /**
             * no protocol.
             */
            NONE,
            /**
             * The Motif DND protocol. No longer supported
             */
            MOTIF,
            /**
             * The Xdnd protocol.
             */
            XDND,
            /**
             * An extension to the Xdnd protocol for
             *  unclaimed root window drops.
             */
            ROOTWIN,
            /**
             * The simple WM_DROPFILES protocol.
             */
            WIN32_DROPFILES,
            /**
             * The complex OLE2 DND protocol (not implemented).
             */
            OLE2,
            /**
             * Intra-application DND.
             */
            LOCAL,
            /**
             * Wayland DND protocol.
             */
            WAYLAND,
        }
        /**
         * Specifies the type of the event.
         *
         * Do not confuse these events with the signals that GTK+ widgets emit.
         * Although many of these events result in corresponding signals being emitted,
         * the events are often transformed or filtered along the way.
         *
         * In some language bindings, the values %GDK_2BUTTON_PRESS and
         * %GDK_3BUTTON_PRESS would translate into something syntactically
         * invalid (eg `Gdk.EventType.2ButtonPress`, where a
         * symbol is not allowed to start with a number). In that case, the
         * aliases %GDK_DOUBLE_BUTTON_PRESS and %GDK_TRIPLE_BUTTON_PRESS can
         * be used instead.
         */

        /**
         * Specifies the type of the event.
         *
         * Do not confuse these events with the signals that GTK+ widgets emit.
         * Although many of these events result in corresponding signals being emitted,
         * the events are often transformed or filtered along the way.
         *
         * In some language bindings, the values %GDK_2BUTTON_PRESS and
         * %GDK_3BUTTON_PRESS would translate into something syntactically
         * invalid (eg `Gdk.EventType.2ButtonPress`, where a
         * symbol is not allowed to start with a number). In that case, the
         * aliases %GDK_DOUBLE_BUTTON_PRESS and %GDK_TRIPLE_BUTTON_PRESS can
         * be used instead.
         */
        export namespace EventType {
            export const $gtype: GObject.GType<EventType>;
        }

        enum EventType {
            /**
             * a special code to indicate a null event.
             */
            NOTHING,
            /**
             * the window manager has requested that the toplevel window be
             *   hidden or destroyed, usually when the user clicks on a special icon in the
             *   title bar.
             */
            DELETE,
            /**
             * the window has been destroyed.
             */
            DESTROY,
            /**
             * all or part of the window has become visible and needs to be
             *   redrawn.
             */
            EXPOSE,
            /**
             * the pointer (usually a mouse) has moved.
             */
            MOTION_NOTIFY,
            /**
             * a mouse button has been pressed.
             */
            BUTTON_PRESS,
            /**
             * a mouse button has been double-clicked (clicked twice
             *   within a short period of time). Note that each click also generates a
             *   %GDK_BUTTON_PRESS event.
             */
            '2BUTTON_PRESS',
            /**
             * alias for %GDK_2BUTTON_PRESS, added in 3.6.
             */
            DOUBLE_BUTTON_PRESS,
            /**
             * a mouse button has been clicked 3 times in a short period
             *   of time. Note that each click also generates a %GDK_BUTTON_PRESS event.
             */
            '3BUTTON_PRESS',
            /**
             * alias for %GDK_3BUTTON_PRESS, added in 3.6.
             */
            TRIPLE_BUTTON_PRESS,
            /**
             * a mouse button has been released.
             */
            BUTTON_RELEASE,
            /**
             * a key has been pressed.
             */
            KEY_PRESS,
            /**
             * a key has been released.
             */
            KEY_RELEASE,
            /**
             * the pointer has entered the window.
             */
            ENTER_NOTIFY,
            /**
             * the pointer has left the window.
             */
            LEAVE_NOTIFY,
            /**
             * the keyboard focus has entered or left the window.
             */
            FOCUS_CHANGE,
            /**
             * the size, position or stacking order of the window has changed.
             *   Note that GTK+ discards these events for %GDK_WINDOW_CHILD windows.
             */
            CONFIGURE,
            /**
             * the window has been mapped.
             */
            MAP,
            /**
             * the window has been unmapped.
             */
            UNMAP,
            /**
             * a property on the window has been changed or deleted.
             */
            PROPERTY_NOTIFY,
            /**
             * the application has lost ownership of a selection.
             */
            SELECTION_CLEAR,
            /**
             * another application has requested a selection.
             */
            SELECTION_REQUEST,
            /**
             * a selection has been received.
             */
            SELECTION_NOTIFY,
            /**
             * an input device has moved into contact with a sensing
             *   surface (e.g. a touchscreen or graphics tablet).
             */
            PROXIMITY_IN,
            /**
             * an input device has moved out of contact with a sensing
             *   surface.
             */
            PROXIMITY_OUT,
            /**
             * the mouse has entered the window while a drag is in progress.
             */
            DRAG_ENTER,
            /**
             * the mouse has left the window while a drag is in progress.
             */
            DRAG_LEAVE,
            /**
             * the mouse has moved in the window while a drag is in
             *   progress.
             */
            DRAG_MOTION,
            /**
             * the status of the drag operation initiated by the window
             *   has changed.
             */
            DRAG_STATUS,
            /**
             * a drop operation onto the window has started.
             */
            DROP_START,
            /**
             * the drop operation initiated by the window has completed.
             */
            DROP_FINISHED,
            /**
             * a message has been received from another application.
             */
            CLIENT_EVENT,
            /**
             * the window visibility status has changed.
             */
            VISIBILITY_NOTIFY,
            /**
             * the scroll wheel was turned
             */
            SCROLL,
            /**
             * the state of a window has changed. See #GdkWindowState
             *   for the possible window states
             */
            WINDOW_STATE,
            /**
             * a setting has been modified.
             */
            SETTING,
            /**
             * the owner of a selection has changed. This event type
             *   was added in 2.6
             */
            OWNER_CHANGE,
            /**
             * a pointer or keyboard grab was broken. This event type
             *   was added in 2.8.
             */
            GRAB_BROKEN,
            /**
             * the content of the window has been changed. This event type
             *   was added in 2.14.
             */
            DAMAGE,
            /**
             * A new touch event sequence has just started. This event
             *   type was added in 3.4.
             */
            TOUCH_BEGIN,
            /**
             * A touch event sequence has been updated. This event type
             *   was added in 3.4.
             */
            TOUCH_UPDATE,
            /**
             * A touch event sequence has finished. This event type
             *   was added in 3.4.
             */
            TOUCH_END,
            /**
             * A touch event sequence has been canceled. This event type
             *   was added in 3.4.
             */
            TOUCH_CANCEL,
            /**
             * A touchpad swipe gesture event, the current state
             *   is determined by its phase field. This event type was added in 3.18.
             */
            TOUCHPAD_SWIPE,
            /**
             * A touchpad pinch gesture event, the current state
             *   is determined by its phase field. This event type was added in 3.18.
             */
            TOUCHPAD_PINCH,
            /**
             * A tablet pad button press event. This event type
             *   was added in 3.22.
             */
            PAD_BUTTON_PRESS,
            /**
             * A tablet pad button release event. This event type
             *   was added in 3.22.
             */
            PAD_BUTTON_RELEASE,
            /**
             * A tablet pad axis event from a "ring". This event type was
             *   added in 3.22.
             */
            PAD_RING,
            /**
             * A tablet pad axis event from a "strip". This event type was
             *   added in 3.22.
             */
            PAD_STRIP,
            /**
             * A tablet pad group mode change. This event type was
             *   added in 3.22.
             */
            PAD_GROUP_MODE,
            /**
             * marks the end of the GdkEventType enumeration. Added in 2.18
             */
            EVENT_LAST,
        }
        /**
         * Specifies the result of applying a #GdkFilterFunc to a native event.
         */

        /**
         * Specifies the result of applying a #GdkFilterFunc to a native event.
         */
        export namespace FilterReturn {
            export const $gtype: GObject.GType<FilterReturn>;
        }

        enum FilterReturn {
            /**
             * event not handled, continue processing.
             */
            CONTINUE,
            /**
             * native event translated into a GDK event and stored
             *  in the `event` structure that was passed in.
             */
            TRANSLATE,
            /**
             * event handled, terminate processing.
             */
            REMOVE,
        }
        /**
         * Indicates which monitor (in a multi-head setup) a window should span over
         * when in fullscreen mode.
         */

        /**
         * Indicates which monitor (in a multi-head setup) a window should span over
         * when in fullscreen mode.
         */
        export namespace FullscreenMode {
            export const $gtype: GObject.GType<FullscreenMode>;
        }

        enum FullscreenMode {
            /**
             * Fullscreen on current monitor only.
             */
            CURRENT_MONITOR,
            /**
             * Span across all monitors when fullscreen.
             */
            ALL_MONITORS,
        }
        /**
         * Error enumeration for #GdkGLContext.
         */
        class GLError extends GLib.Error {
            static $gtype: GObject.GType<GLError>;

            // Static fields

            /**
             * OpenGL support is not available
             */
            static NOT_AVAILABLE: number;
            /**
             * The requested visual format is not supported
             */
            static UNSUPPORTED_FORMAT: number;
            /**
             * The requested profile is not supported
             */
            static UNSUPPORTED_PROFILE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Defines how device grabs interact with other devices.
         */

        /**
         * Defines how device grabs interact with other devices.
         */
        export namespace GrabOwnership {
            export const $gtype: GObject.GType<GrabOwnership>;
        }

        enum GrabOwnership {
            /**
             * All other devices’ events are allowed.
             */
            NONE,
            /**
             * Other devices’ events are blocked for the grab window.
             */
            WINDOW,
            /**
             * Other devices’ events are blocked for the whole application.
             */
            APPLICATION,
        }
        /**
         * Returned by gdk_device_grab(), gdk_pointer_grab() and gdk_keyboard_grab() to
         * indicate success or the reason for the failure of the grab attempt.
         */

        /**
         * Returned by gdk_device_grab(), gdk_pointer_grab() and gdk_keyboard_grab() to
         * indicate success or the reason for the failure of the grab attempt.
         */
        export namespace GrabStatus {
            export const $gtype: GObject.GType<GrabStatus>;
        }

        enum GrabStatus {
            /**
             * the resource was successfully grabbed.
             */
            SUCCESS,
            /**
             * the resource is actively grabbed by another client.
             */
            ALREADY_GRABBED,
            /**
             * the resource was grabbed more recently than the
             *  specified time.
             */
            INVALID_TIME,
            /**
             * the grab window or the `confine_to` window are not
             *  viewable.
             */
            NOT_VIEWABLE,
            /**
             * the resource is frozen by an active grab of another client.
             */
            FROZEN,
            /**
             * the grab failed for some other reason. Since 3.16
             */
            FAILED,
        }
        /**
         * Defines the reference point of a window and the meaning of coordinates
         * passed to gtk_window_move(). See gtk_window_move() and the "implementation
         * notes" section of the
         * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
         * specification for more details.
         */

        /**
         * Defines the reference point of a window and the meaning of coordinates
         * passed to gtk_window_move(). See gtk_window_move() and the "implementation
         * notes" section of the
         * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
         * specification for more details.
         */
        export namespace Gravity {
            export const $gtype: GObject.GType<Gravity>;
        }

        enum Gravity {
            /**
             * the reference point is at the top left corner.
             */
            NORTH_WEST,
            /**
             * the reference point is in the middle of the top edge.
             */
            NORTH,
            /**
             * the reference point is at the top right corner.
             */
            NORTH_EAST,
            /**
             * the reference point is at the middle of the left edge.
             */
            WEST,
            /**
             * the reference point is at the center of the window.
             */
            CENTER,
            /**
             * the reference point is at the middle of the right edge.
             */
            EAST,
            /**
             * the reference point is at the lower left corner.
             */
            SOUTH_WEST,
            /**
             * the reference point is at the middle of the lower edge.
             */
            SOUTH,
            /**
             * the reference point is at the lower right corner.
             */
            SOUTH_EAST,
            /**
             * the reference point is at the top left corner of the
             *  window itself, ignoring window manager decorations.
             */
            STATIC,
        }
        /**
         * An enumeration that describes the mode of an input device.
         */

        /**
         * An enumeration that describes the mode of an input device.
         */
        export namespace InputMode {
            export const $gtype: GObject.GType<InputMode>;
        }

        enum InputMode {
            /**
             * the device is disabled and will not report any events.
             */
            DISABLED,
            /**
             * the device is enabled. The device’s coordinate space
             *                   maps to the entire screen.
             */
            SCREEN,
            /**
             * the device is enabled. The device’s coordinate space
             *                   is mapped to a single window. The manner in which this window
             *                   is chosen is undefined, but it will typically be the same
             *                   way in which the focus window for key events is determined.
             */
            WINDOW,
        }
        /**
         * An enumeration describing the type of an input device in general terms.
         */

        /**
         * An enumeration describing the type of an input device in general terms.
         */
        export namespace InputSource {
            export const $gtype: GObject.GType<InputSource>;
        }

        enum InputSource {
            /**
             * the device is a mouse. (This will be reported for the core
             *                    pointer, even if it is something else, such as a trackball.)
             */
            MOUSE,
            /**
             * the device is a stylus of a graphics tablet or similar device.
             */
            PEN,
            /**
             * the device is an eraser. Typically, this would be the other end
             *                     of a stylus on a graphics tablet.
             */
            ERASER,
            /**
             * the device is a graphics tablet “puck” or similar device.
             */
            CURSOR,
            /**
             * the device is a keyboard.
             */
            KEYBOARD,
            /**
             * the device is a direct-input touch device, such
             *     as a touchscreen or tablet. This device type has been added in 3.4.
             */
            TOUCHSCREEN,
            /**
             * the device is an indirect touch device, such
             *     as a touchpad. This device type has been added in 3.4.
             */
            TOUCHPAD,
            /**
             * the device is a trackpoint. This device type has been
             *     added in 3.22
             */
            TRACKPOINT,
            /**
             * the device is a "pad", a collection of buttons,
             *     rings and strips found in drawing tablets. This device type has been
             *     added in 3.22.
             */
            TABLET_PAD,
        }
        /**
         * This enum is used with gdk_keymap_get_modifier_mask()
         * in order to determine what modifiers the
         * currently used windowing system backend uses for particular
         * purposes. For example, on X11/Windows, the Control key is used for
         * invoking menu shortcuts (accelerators), whereas on Apple computers
         * it’s the Command key (which correspond to %GDK_CONTROL_MASK and
         * %GDK_MOD2_MASK, respectively).
         */

        /**
         * This enum is used with gdk_keymap_get_modifier_mask()
         * in order to determine what modifiers the
         * currently used windowing system backend uses for particular
         * purposes. For example, on X11/Windows, the Control key is used for
         * invoking menu shortcuts (accelerators), whereas on Apple computers
         * it’s the Command key (which correspond to %GDK_CONTROL_MASK and
         * %GDK_MOD2_MASK, respectively).
         */
        export namespace ModifierIntent {
            export const $gtype: GObject.GType<ModifierIntent>;
        }

        enum ModifierIntent {
            /**
             * the primary modifier used to invoke
             *  menu accelerators.
             */
            PRIMARY_ACCELERATOR,
            /**
             * the modifier used to invoke context menus.
             *  Note that mouse button 3 always triggers context menus. When this modifier
             *  is not 0, it additionally triggers context menus when used with mouse button 1.
             */
            CONTEXT_MENU,
            /**
             * the modifier used to extend selections
             *  using `modifier`-click or `modifier`-cursor-key
             */
            EXTEND_SELECTION,
            /**
             * the modifier used to modify selections,
             *  which in most cases means toggling the clicked item into or out of the selection.
             */
            MODIFY_SELECTION,
            /**
             * when any of these modifiers is pressed, the
             *  key event cannot produce a symbol directly. This is meant to be used for
             *  input methods, and for use cases like typeahead search.
             */
            NO_TEXT_INPUT,
            /**
             * the modifier that switches between keyboard
             *  groups (AltGr on X11/Windows and Option/Alt on OS X).
             */
            SHIFT_GROUP,
            /**
             * The set of modifier masks accepted
             * as modifiers in accelerators. Needed because Command is mapped to MOD2 on
             * OSX, which is widely used, but on X11 MOD2 is NumLock and using that for a
             * mod key is problematic at best.
             * Ref: https://bugzilla.gnome.org/show_bug.cgi?id=736125.
             */
            DEFAULT_MOD_MASK,
        }
        /**
         * Specifies the kind of crossing for #GdkEventCrossing.
         *
         * See the X11 protocol specification of LeaveNotify for
         * full details of crossing event generation.
         */

        /**
         * Specifies the kind of crossing for #GdkEventCrossing.
         *
         * See the X11 protocol specification of LeaveNotify for
         * full details of crossing event generation.
         */
        export namespace NotifyType {
            export const $gtype: GObject.GType<NotifyType>;
        }

        enum NotifyType {
            /**
             * the window is entered from an ancestor or
             *   left towards an ancestor.
             */
            ANCESTOR,
            /**
             * the pointer moves between an ancestor and an
             *   inferior of the window.
             */
            VIRTUAL,
            /**
             * the window is entered from an inferior or
             *   left towards an inferior.
             */
            INFERIOR,
            /**
             * the window is entered from or left towards
             *   a window which is neither an ancestor nor an inferior.
             */
            NONLINEAR,
            /**
             * the pointer moves between two windows
             *   which are not ancestors of each other and the window is part of
             *   the ancestor chain between one of these windows and their least
             *   common ancestor.
             */
            NONLINEAR_VIRTUAL,
            /**
             * an unknown type of enter/leave event occurred.
             */
            UNKNOWN,
        }
        /**
         * Specifies why a selection ownership was changed.
         */

        /**
         * Specifies why a selection ownership was changed.
         */
        export namespace OwnerChange {
            export const $gtype: GObject.GType<OwnerChange>;
        }

        enum OwnerChange {
            /**
             * some other app claimed the ownership
             */
            NEW_OWNER,
            /**
             * the window was destroyed
             */
            DESTROY,
            /**
             * the client was closed
             */
            CLOSE,
        }
        /**
         * Describes how existing data is combined with new data when
         * using gdk_property_change().
         */

        /**
         * Describes how existing data is combined with new data when
         * using gdk_property_change().
         */
        export namespace PropMode {
            export const $gtype: GObject.GType<PropMode>;
        }

        enum PropMode {
            /**
             * the new data replaces the existing data.
             */
            REPLACE,
            /**
             * the new data is prepended to the existing data.
             */
            PREPEND,
            /**
             * the new data is appended to the existing data.
             */
            APPEND,
        }
        /**
         * Specifies the type of a property change for a #GdkEventProperty.
         */

        /**
         * Specifies the type of a property change for a #GdkEventProperty.
         */
        export namespace PropertyState {
            export const $gtype: GObject.GType<PropertyState>;
        }

        enum PropertyState {
            /**
             * the property value was changed.
             */
            NEW_VALUE,
            /**
             * the property was deleted.
             */
            DELETE,
        }
        /**
         * Specifies the direction for #GdkEventScroll.
         */

        /**
         * Specifies the direction for #GdkEventScroll.
         */
        export namespace ScrollDirection {
            export const $gtype: GObject.GType<ScrollDirection>;
        }

        enum ScrollDirection {
            /**
             * the window is scrolled up.
             */
            UP,
            /**
             * the window is scrolled down.
             */
            DOWN,
            /**
             * the window is scrolled to the left.
             */
            LEFT,
            /**
             * the window is scrolled to the right.
             */
            RIGHT,
            /**
             * the scrolling is determined by the delta values
             *   in #GdkEventScroll. See gdk_event_get_scroll_deltas(). Since: 3.4
             */
            SMOOTH,
        }
        /**
         * Specifies the kind of modification applied to a setting in a
         * #GdkEventSetting.
         */

        /**
         * Specifies the kind of modification applied to a setting in a
         * #GdkEventSetting.
         */
        export namespace SettingAction {
            export const $gtype: GObject.GType<SettingAction>;
        }

        enum SettingAction {
            /**
             * a setting was added.
             */
            NEW,
            /**
             * a setting was changed.
             */
            CHANGED,
            /**
             * a setting was deleted.
             */
            DELETED,
        }

        export namespace Status {
            export const $gtype: GObject.GType<Status>;
        }

        enum Status {
            OK,
            ERROR,
            ERROR_PARAM,
            ERROR_FILE,
            ERROR_MEM,
        }
        /**
         * This enumeration describes how the red, green and blue components
         * of physical pixels on an output device are laid out.
         */

        /**
         * This enumeration describes how the red, green and blue components
         * of physical pixels on an output device are laid out.
         */
        export namespace SubpixelLayout {
            export const $gtype: GObject.GType<SubpixelLayout>;
        }

        enum SubpixelLayout {
            /**
             * The layout is not known
             */
            UNKNOWN,
            /**
             * Not organized in this way
             */
            NONE,
            /**
             * The layout is horizontal, the order is RGB
             */
            HORIZONTAL_RGB,
            /**
             * The layout is horizontal, the order is BGR
             */
            HORIZONTAL_BGR,
            /**
             * The layout is vertical, the order is RGB
             */
            VERTICAL_RGB,
            /**
             * The layout is vertical, the order is BGR
             */
            VERTICAL_BGR,
        }
        /**
         * Specifies the current state of a touchpad gesture. All gestures are
         * guaranteed to begin with an event with phase %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN,
         * followed by 0 or several events with phase %GDK_TOUCHPAD_GESTURE_PHASE_UPDATE.
         *
         * A finished gesture may have 2 possible outcomes, an event with phase
         * %GDK_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
         * considered successful, this should be used as the hint to perform any
         * permanent changes.
         *
         * Cancelled gestures may be so for a variety of reasons, due to hardware
         * or the compositor, or due to the gesture recognition layers hinting the
         * gesture did not finish resolutely (eg. a 3rd finger being added during
         * a pinch gesture). In these cases, the last event will report the phase
         * %GDK_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
         * to undo any visible/permanent changes that were done throughout the
         * progress of the gesture.
         *
         * See also #GdkEventTouchpadSwipe and #GdkEventTouchpadPinch.
         */

        /**
         * Specifies the current state of a touchpad gesture. All gestures are
         * guaranteed to begin with an event with phase %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN,
         * followed by 0 or several events with phase %GDK_TOUCHPAD_GESTURE_PHASE_UPDATE.
         *
         * A finished gesture may have 2 possible outcomes, an event with phase
         * %GDK_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
         * considered successful, this should be used as the hint to perform any
         * permanent changes.
         *
         * Cancelled gestures may be so for a variety of reasons, due to hardware
         * or the compositor, or due to the gesture recognition layers hinting the
         * gesture did not finish resolutely (eg. a 3rd finger being added during
         * a pinch gesture). In these cases, the last event will report the phase
         * %GDK_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
         * to undo any visible/permanent changes that were done throughout the
         * progress of the gesture.
         *
         * See also #GdkEventTouchpadSwipe and #GdkEventTouchpadPinch.
         */
        export namespace TouchpadGesturePhase {
            export const $gtype: GObject.GType<TouchpadGesturePhase>;
        }

        enum TouchpadGesturePhase {
            /**
             * The gesture has begun.
             */
            BEGIN,
            /**
             * The gesture has been updated.
             */
            UPDATE,
            /**
             * The gesture was finished, changes
             *   should be permanently applied.
             */
            END,
            /**
             * The gesture was cancelled, all
             *   changes should be undone.
             */
            CANCEL,
        }
        /**
         * Specifies the visiblity status of a window for a #GdkEventVisibility.
         */

        /**
         * Specifies the visiblity status of a window for a #GdkEventVisibility.
         */
        export namespace VisibilityState {
            export const $gtype: GObject.GType<VisibilityState>;
        }

        enum VisibilityState {
            /**
             * the window is completely visible.
             */
            UNOBSCURED,
            /**
             * the window is partially visible.
             */
            PARTIAL,
            /**
             * the window is not visible at all.
             */
            FULLY_OBSCURED,
        }
        /**
         * A set of values that describe the manner in which the pixel values
         * for a visual are converted into RGB values for display.
         */

        /**
         * A set of values that describe the manner in which the pixel values
         * for a visual are converted into RGB values for display.
         */
        export namespace VisualType {
            export const $gtype: GObject.GType<VisualType>;
        }

        enum VisualType {
            /**
             * Each pixel value indexes a grayscale value
             *     directly.
             */
            STATIC_GRAY,
            /**
             * Each pixel is an index into a color map that
             *     maps pixel values into grayscale values. The color map can be
             *     changed by an application.
             */
            GRAYSCALE,
            /**
             * Each pixel value is an index into a predefined,
             *     unmodifiable color map that maps pixel values into RGB values.
             */
            STATIC_COLOR,
            /**
             * Each pixel is an index into a color map that
             *     maps pixel values into rgb values. The color map can be changed by
             *     an application.
             */
            PSEUDO_COLOR,
            /**
             * Each pixel value directly contains red, green,
             *     and blue components. Use gdk_visual_get_red_pixel_details(), etc,
             *     to obtain information about how the components are assembled into
             *     a pixel value.
             */
            TRUE_COLOR,
            /**
             * Each pixel value contains red, green, and blue
             *     components as for %GDK_VISUAL_TRUE_COLOR, but the components are
             *     mapped via a color table into the final output table instead of
             *     being converted directly.
             */
            DIRECT_COLOR,
        }
        /**
         * Determines a window edge or corner.
         */

        /**
         * Determines a window edge or corner.
         */
        export namespace WindowEdge {
            export const $gtype: GObject.GType<WindowEdge>;
        }

        enum WindowEdge {
            /**
             * the top left corner.
             */
            NORTH_WEST,
            /**
             * the top edge.
             */
            NORTH,
            /**
             * the top right corner.
             */
            NORTH_EAST,
            /**
             * the left edge.
             */
            WEST,
            /**
             * the right edge.
             */
            EAST,
            /**
             * the lower left corner.
             */
            SOUTH_WEST,
            /**
             * the lower edge.
             */
            SOUTH,
            /**
             * the lower right corner.
             */
            SOUTH_EAST,
        }
        /**
         * Describes the kind of window.
         */

        /**
         * Describes the kind of window.
         */
        export namespace WindowType {
            export const $gtype: GObject.GType<WindowType>;
        }

        enum WindowType {
            /**
             * root window; this window has no parent, covers the entire
             *  screen, and is created by the window system
             */
            ROOT,
            /**
             * toplevel window (used to implement #GtkWindow)
             */
            TOPLEVEL,
            /**
             * child window (used to implement e.g. #GtkEntry)
             */
            CHILD,
            /**
             * override redirect temporary window (used to implement
             *  #GtkMenu)
             */
            TEMP,
            /**
             * foreign window (see gdk_window_foreign_new())
             */
            FOREIGN,
            /**
             * offscreen window (see
             *  [Offscreen Windows][OFFSCREEN-WINDOWS]). Since 2.18
             */
            OFFSCREEN,
            /**
             * subsurface-based window; This window is visually
             *  tied to a toplevel, and is moved/stacked with it. Currently this window
             *  type is only implemented in Wayland. Since 3.14
             */
            SUBSURFACE,
        }
        /**
         * These are hints for the window manager that indicate what type of function
         * the window has. The window manager can use this when determining decoration
         * and behaviour of the window. The hint must be set before mapping the window.
         *
         * See the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
         * specification for more details about window types.
         */

        /**
         * These are hints for the window manager that indicate what type of function
         * the window has. The window manager can use this when determining decoration
         * and behaviour of the window. The hint must be set before mapping the window.
         *
         * See the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
         * specification for more details about window types.
         */
        export namespace WindowTypeHint {
            export const $gtype: GObject.GType<WindowTypeHint>;
        }

        enum WindowTypeHint {
            /**
             * Normal toplevel window.
             */
            NORMAL,
            /**
             * Dialog window.
             */
            DIALOG,
            /**
             * Window used to implement a menu; GTK+ uses
             *  this hint only for torn-off menus, see #GtkTearoffMenuItem.
             */
            MENU,
            /**
             * Window used to implement toolbars.
             */
            TOOLBAR,
            /**
             * Window used to display a splash
             *  screen during application startup.
             */
            SPLASHSCREEN,
            /**
             * Utility windows which are not detached
             *  toolbars or dialogs.
             */
            UTILITY,
            /**
             * Used for creating dock or panel windows.
             */
            DOCK,
            /**
             * Used for creating the desktop background
             *  window.
             */
            DESKTOP,
            /**
             * A menu that belongs to a menubar.
             */
            DROPDOWN_MENU,
            /**
             * A menu that does not belong to a menubar,
             *  e.g. a context menu.
             */
            POPUP_MENU,
            /**
             * A tooltip.
             */
            TOOLTIP,
            /**
             * A notification - typically a “bubble”
             *  that belongs to a status icon.
             */
            NOTIFICATION,
            /**
             * A popup from a combo box.
             */
            COMBO,
            /**
             * A window that is used to implement a DND cursor.
             */
            DND,
        }
        /**
         * `GDK_INPUT_OUTPUT` windows are the standard kind of window you might expect.
         * Such windows receive events and are also displayed on screen.
         * `GDK_INPUT_ONLY` windows are invisible; they are usually placed above other
         * windows in order to trap or filter the events. You can’t draw on
         * `GDK_INPUT_ONLY` windows.
         */

        /**
         * `GDK_INPUT_OUTPUT` windows are the standard kind of window you might expect.
         * Such windows receive events and are also displayed on screen.
         * `GDK_INPUT_ONLY` windows are invisible; they are usually placed above other
         * windows in order to trap or filter the events. You can’t draw on
         * `GDK_INPUT_ONLY` windows.
         */
        export namespace WindowWindowClass {
            export const $gtype: GObject.GType<WindowWindowClass>;
        }

        enum WindowWindowClass {
            /**
             * window for graphics and events
             */
            INPUT_OUTPUT,
            /**
             * window for events only
             */
            INPUT_ONLY,
        }
        /**
         * The middle button.
         */
        const BUTTON_MIDDLE: number;
        /**
         * The primary button. This is typically the left mouse button, or the
         * right button in a left-handed setup.
         */
        const BUTTON_PRIMARY: number;
        /**
         * The secondary button. This is typically the right mouse button, or the
         * left button in a left-handed setup.
         */
        const BUTTON_SECONDARY: number;
        /**
         * Represents the current time, and can be used anywhere a time is expected.
         */
        const CURRENT_TIME: number;
        /**
         * Use this macro as the return value for continuing the propagation of
         * an event handler.
         */
        const EVENT_PROPAGATE: boolean;
        /**
         * Use this macro as the return value for stopping the propagation of
         * an event handler.
         */
        const EVENT_STOP: boolean;
        const KEY_0: number;
        const KEY_1: number;
        const KEY_2: number;
        const KEY_3: number;
        const KEY_3270_AltCursor: number;
        const KEY_3270_Attn: number;
        const KEY_3270_BackTab: number;
        const KEY_3270_ChangeScreen: number;
        const KEY_3270_Copy: number;
        const KEY_3270_CursorBlink: number;
        const KEY_3270_CursorSelect: number;
        const KEY_3270_DeleteWord: number;
        const KEY_3270_Duplicate: number;
        const KEY_3270_Enter: number;
        const KEY_3270_EraseEOF: number;
        const KEY_3270_EraseInput: number;
        const KEY_3270_ExSelect: number;
        const KEY_3270_FieldMark: number;
        const KEY_3270_Ident: number;
        const KEY_3270_Jump: number;
        const KEY_3270_KeyClick: number;
        const KEY_3270_Left2: number;
        const KEY_3270_PA1: number;
        const KEY_3270_PA2: number;
        const KEY_3270_PA3: number;
        const KEY_3270_Play: number;
        const KEY_3270_PrintScreen: number;
        const KEY_3270_Quit: number;
        const KEY_3270_Record: number;
        const KEY_3270_Reset: number;
        const KEY_3270_Right2: number;
        const KEY_3270_Rule: number;
        const KEY_3270_Setup: number;
        const KEY_3270_Test: number;
        const KEY_4: number;
        const KEY_5: number;
        const KEY_6: number;
        const KEY_7: number;
        const KEY_8: number;
        const KEY_9: number;
        const KEY_A: number;
        const KEY_AE: number;
        const KEY_Aacute: number;
        const KEY_Abelowdot: number;
        const KEY_Abreve: number;
        const KEY_Abreveacute: number;
        const KEY_Abrevebelowdot: number;
        const KEY_Abrevegrave: number;
        const KEY_Abrevehook: number;
        const KEY_Abrevetilde: number;
        const KEY_AccessX_Enable: number;
        const KEY_AccessX_Feedback_Enable: number;
        const KEY_Acircumflex: number;
        const KEY_Acircumflexacute: number;
        const KEY_Acircumflexbelowdot: number;
        const KEY_Acircumflexgrave: number;
        const KEY_Acircumflexhook: number;
        const KEY_Acircumflextilde: number;
        const KEY_AddFavorite: number;
        const KEY_Adiaeresis: number;
        const KEY_Agrave: number;
        const KEY_Ahook: number;
        const KEY_Alt_L: number;
        const KEY_Alt_R: number;
        const KEY_Amacron: number;
        const KEY_Aogonek: number;
        const KEY_ApplicationLeft: number;
        const KEY_ApplicationRight: number;
        const KEY_Arabic_0: number;
        const KEY_Arabic_1: number;
        const KEY_Arabic_2: number;
        const KEY_Arabic_3: number;
        const KEY_Arabic_4: number;
        const KEY_Arabic_5: number;
        const KEY_Arabic_6: number;
        const KEY_Arabic_7: number;
        const KEY_Arabic_8: number;
        const KEY_Arabic_9: number;
        const KEY_Arabic_ain: number;
        const KEY_Arabic_alef: number;
        const KEY_Arabic_alefmaksura: number;
        const KEY_Arabic_beh: number;
        const KEY_Arabic_comma: number;
        const KEY_Arabic_dad: number;
        const KEY_Arabic_dal: number;
        const KEY_Arabic_damma: number;
        const KEY_Arabic_dammatan: number;
        const KEY_Arabic_ddal: number;
        const KEY_Arabic_farsi_yeh: number;
        const KEY_Arabic_fatha: number;
        const KEY_Arabic_fathatan: number;
        const KEY_Arabic_feh: number;
        const KEY_Arabic_fullstop: number;
        const KEY_Arabic_gaf: number;
        const KEY_Arabic_ghain: number;
        const KEY_Arabic_ha: number;
        const KEY_Arabic_hah: number;
        const KEY_Arabic_hamza: number;
        const KEY_Arabic_hamza_above: number;
        const KEY_Arabic_hamza_below: number;
        const KEY_Arabic_hamzaonalef: number;
        const KEY_Arabic_hamzaonwaw: number;
        const KEY_Arabic_hamzaonyeh: number;
        const KEY_Arabic_hamzaunderalef: number;
        const KEY_Arabic_heh: number;
        const KEY_Arabic_heh_doachashmee: number;
        const KEY_Arabic_heh_goal: number;
        const KEY_Arabic_jeem: number;
        const KEY_Arabic_jeh: number;
        const KEY_Arabic_kaf: number;
        const KEY_Arabic_kasra: number;
        const KEY_Arabic_kasratan: number;
        const KEY_Arabic_keheh: number;
        const KEY_Arabic_khah: number;
        const KEY_Arabic_lam: number;
        const KEY_Arabic_madda_above: number;
        const KEY_Arabic_maddaonalef: number;
        const KEY_Arabic_meem: number;
        const KEY_Arabic_noon: number;
        const KEY_Arabic_noon_ghunna: number;
        const KEY_Arabic_peh: number;
        const KEY_Arabic_percent: number;
        const KEY_Arabic_qaf: number;
        const KEY_Arabic_question_mark: number;
        const KEY_Arabic_ra: number;
        const KEY_Arabic_rreh: number;
        const KEY_Arabic_sad: number;
        const KEY_Arabic_seen: number;
        const KEY_Arabic_semicolon: number;
        const KEY_Arabic_shadda: number;
        const KEY_Arabic_sheen: number;
        const KEY_Arabic_sukun: number;
        const KEY_Arabic_superscript_alef: number;
        const KEY_Arabic_switch: number;
        const KEY_Arabic_tah: number;
        const KEY_Arabic_tatweel: number;
        const KEY_Arabic_tcheh: number;
        const KEY_Arabic_teh: number;
        const KEY_Arabic_tehmarbuta: number;
        const KEY_Arabic_thal: number;
        const KEY_Arabic_theh: number;
        const KEY_Arabic_tteh: number;
        const KEY_Arabic_veh: number;
        const KEY_Arabic_waw: number;
        const KEY_Arabic_yeh: number;
        const KEY_Arabic_yeh_baree: number;
        const KEY_Arabic_zah: number;
        const KEY_Arabic_zain: number;
        const KEY_Aring: number;
        const KEY_Armenian_AT: number;
        const KEY_Armenian_AYB: number;
        const KEY_Armenian_BEN: number;
        const KEY_Armenian_CHA: number;
        const KEY_Armenian_DA: number;
        const KEY_Armenian_DZA: number;
        const KEY_Armenian_E: number;
        const KEY_Armenian_FE: number;
        const KEY_Armenian_GHAT: number;
        const KEY_Armenian_GIM: number;
        const KEY_Armenian_HI: number;
        const KEY_Armenian_HO: number;
        const KEY_Armenian_INI: number;
        const KEY_Armenian_JE: number;
        const KEY_Armenian_KE: number;
        const KEY_Armenian_KEN: number;
        const KEY_Armenian_KHE: number;
        const KEY_Armenian_LYUN: number;
        const KEY_Armenian_MEN: number;
        const KEY_Armenian_NU: number;
        const KEY_Armenian_O: number;
        const KEY_Armenian_PE: number;
        const KEY_Armenian_PYUR: number;
        const KEY_Armenian_RA: number;
        const KEY_Armenian_RE: number;
        const KEY_Armenian_SE: number;
        const KEY_Armenian_SHA: number;
        const KEY_Armenian_TCHE: number;
        const KEY_Armenian_TO: number;
        const KEY_Armenian_TSA: number;
        const KEY_Armenian_TSO: number;
        const KEY_Armenian_TYUN: number;
        const KEY_Armenian_VEV: number;
        const KEY_Armenian_VO: number;
        const KEY_Armenian_VYUN: number;
        const KEY_Armenian_YECH: number;
        const KEY_Armenian_ZA: number;
        const KEY_Armenian_ZHE: number;
        const KEY_Armenian_accent: number;
        const KEY_Armenian_amanak: number;
        const KEY_Armenian_apostrophe: number;
        const KEY_Armenian_at: number;
        const KEY_Armenian_ayb: number;
        const KEY_Armenian_ben: number;
        const KEY_Armenian_but: number;
        const KEY_Armenian_cha: number;
        const KEY_Armenian_da: number;
        const KEY_Armenian_dza: number;
        const KEY_Armenian_e: number;
        const KEY_Armenian_exclam: number;
        const KEY_Armenian_fe: number;
        const KEY_Armenian_full_stop: number;
        const KEY_Armenian_ghat: number;
        const KEY_Armenian_gim: number;
        const KEY_Armenian_hi: number;
        const KEY_Armenian_ho: number;
        const KEY_Armenian_hyphen: number;
        const KEY_Armenian_ini: number;
        const KEY_Armenian_je: number;
        const KEY_Armenian_ke: number;
        const KEY_Armenian_ken: number;
        const KEY_Armenian_khe: number;
        const KEY_Armenian_ligature_ew: number;
        const KEY_Armenian_lyun: number;
        const KEY_Armenian_men: number;
        const KEY_Armenian_nu: number;
        const KEY_Armenian_o: number;
        const KEY_Armenian_paruyk: number;
        const KEY_Armenian_pe: number;
        const KEY_Armenian_pyur: number;
        const KEY_Armenian_question: number;
        const KEY_Armenian_ra: number;
        const KEY_Armenian_re: number;
        const KEY_Armenian_se: number;
        const KEY_Armenian_separation_mark: number;
        const KEY_Armenian_sha: number;
        const KEY_Armenian_shesht: number;
        const KEY_Armenian_tche: number;
        const KEY_Armenian_to: number;
        const KEY_Armenian_tsa: number;
        const KEY_Armenian_tso: number;
        const KEY_Armenian_tyun: number;
        const KEY_Armenian_verjaket: number;
        const KEY_Armenian_vev: number;
        const KEY_Armenian_vo: number;
        const KEY_Armenian_vyun: number;
        const KEY_Armenian_yech: number;
        const KEY_Armenian_yentamna: number;
        const KEY_Armenian_za: number;
        const KEY_Armenian_zhe: number;
        const KEY_Atilde: number;
        const KEY_AudibleBell_Enable: number;
        const KEY_AudioCycleTrack: number;
        const KEY_AudioForward: number;
        const KEY_AudioLowerVolume: number;
        const KEY_AudioMedia: number;
        const KEY_AudioMicMute: number;
        const KEY_AudioMute: number;
        const KEY_AudioNext: number;
        const KEY_AudioPause: number;
        const KEY_AudioPlay: number;
        const KEY_AudioPreset: number;
        const KEY_AudioPrev: number;
        const KEY_AudioRaiseVolume: number;
        const KEY_AudioRandomPlay: number;
        const KEY_AudioRecord: number;
        const KEY_AudioRepeat: number;
        const KEY_AudioRewind: number;
        const KEY_AudioStop: number;
        const KEY_Away: number;
        const KEY_B: number;
        const KEY_Babovedot: number;
        const KEY_Back: number;
        const KEY_BackForward: number;
        const KEY_BackSpace: number;
        const KEY_Battery: number;
        const KEY_Begin: number;
        const KEY_Blue: number;
        const KEY_Bluetooth: number;
        const KEY_Book: number;
        const KEY_BounceKeys_Enable: number;
        const KEY_Break: number;
        const KEY_BrightnessAdjust: number;
        const KEY_Byelorussian_SHORTU: number;
        const KEY_Byelorussian_shortu: number;
        const KEY_C: number;
        const KEY_CD: number;
        const KEY_CH: number;
        const KEY_C_H: number;
        const KEY_C_h: number;
        const KEY_Cabovedot: number;
        const KEY_Cacute: number;
        const KEY_Calculator: number;
        const KEY_Calendar: number;
        const KEY_Cancel: number;
        const KEY_Caps_Lock: number;
        const KEY_Ccaron: number;
        const KEY_Ccedilla: number;
        const KEY_Ccircumflex: number;
        const KEY_Ch: number;
        const KEY_Clear: number;
        const KEY_ClearGrab: number;
        const KEY_Close: number;
        const KEY_Codeinput: number;
        const KEY_ColonSign: number;
        const KEY_Community: number;
        const KEY_ContrastAdjust: number;
        const KEY_Control_L: number;
        const KEY_Control_R: number;
        const KEY_Copy: number;
        const KEY_CruzeiroSign: number;
        const KEY_Cut: number;
        const KEY_CycleAngle: number;
        const KEY_Cyrillic_A: number;
        const KEY_Cyrillic_BE: number;
        const KEY_Cyrillic_CHE: number;
        const KEY_Cyrillic_CHE_descender: number;
        const KEY_Cyrillic_CHE_vertstroke: number;
        const KEY_Cyrillic_DE: number;
        const KEY_Cyrillic_DZHE: number;
        const KEY_Cyrillic_E: number;
        const KEY_Cyrillic_EF: number;
        const KEY_Cyrillic_EL: number;
        const KEY_Cyrillic_EM: number;
        const KEY_Cyrillic_EN: number;
        const KEY_Cyrillic_EN_descender: number;
        const KEY_Cyrillic_ER: number;
        const KEY_Cyrillic_ES: number;
        const KEY_Cyrillic_GHE: number;
        const KEY_Cyrillic_GHE_bar: number;
        const KEY_Cyrillic_HA: number;
        const KEY_Cyrillic_HARDSIGN: number;
        const KEY_Cyrillic_HA_descender: number;
        const KEY_Cyrillic_I: number;
        const KEY_Cyrillic_IE: number;
        const KEY_Cyrillic_IO: number;
        const KEY_Cyrillic_I_macron: number;
        const KEY_Cyrillic_JE: number;
        const KEY_Cyrillic_KA: number;
        const KEY_Cyrillic_KA_descender: number;
        const KEY_Cyrillic_KA_vertstroke: number;
        const KEY_Cyrillic_LJE: number;
        const KEY_Cyrillic_NJE: number;
        const KEY_Cyrillic_O: number;
        const KEY_Cyrillic_O_bar: number;
        const KEY_Cyrillic_PE: number;
        const KEY_Cyrillic_SCHWA: number;
        const KEY_Cyrillic_SHA: number;
        const KEY_Cyrillic_SHCHA: number;
        const KEY_Cyrillic_SHHA: number;
        const KEY_Cyrillic_SHORTI: number;
        const KEY_Cyrillic_SOFTSIGN: number;
        const KEY_Cyrillic_TE: number;
        const KEY_Cyrillic_TSE: number;
        const KEY_Cyrillic_U: number;
        const KEY_Cyrillic_U_macron: number;
        const KEY_Cyrillic_U_straight: number;
        const KEY_Cyrillic_U_straight_bar: number;
        const KEY_Cyrillic_VE: number;
        const KEY_Cyrillic_YA: number;
        const KEY_Cyrillic_YERU: number;
        const KEY_Cyrillic_YU: number;
        const KEY_Cyrillic_ZE: number;
        const KEY_Cyrillic_ZHE: number;
        const KEY_Cyrillic_ZHE_descender: number;
        const KEY_Cyrillic_a: number;
        const KEY_Cyrillic_be: number;
        const KEY_Cyrillic_che: number;
        const KEY_Cyrillic_che_descender: number;
        const KEY_Cyrillic_che_vertstroke: number;
        const KEY_Cyrillic_de: number;
        const KEY_Cyrillic_dzhe: number;
        const KEY_Cyrillic_e: number;
        const KEY_Cyrillic_ef: number;
        const KEY_Cyrillic_el: number;
        const KEY_Cyrillic_em: number;
        const KEY_Cyrillic_en: number;
        const KEY_Cyrillic_en_descender: number;
        const KEY_Cyrillic_er: number;
        const KEY_Cyrillic_es: number;
        const KEY_Cyrillic_ghe: number;
        const KEY_Cyrillic_ghe_bar: number;
        const KEY_Cyrillic_ha: number;
        const KEY_Cyrillic_ha_descender: number;
        const KEY_Cyrillic_hardsign: number;
        const KEY_Cyrillic_i: number;
        const KEY_Cyrillic_i_macron: number;
        const KEY_Cyrillic_ie: number;
        const KEY_Cyrillic_io: number;
        const KEY_Cyrillic_je: number;
        const KEY_Cyrillic_ka: number;
        const KEY_Cyrillic_ka_descender: number;
        const KEY_Cyrillic_ka_vertstroke: number;
        const KEY_Cyrillic_lje: number;
        const KEY_Cyrillic_nje: number;
        const KEY_Cyrillic_o: number;
        const KEY_Cyrillic_o_bar: number;
        const KEY_Cyrillic_pe: number;
        const KEY_Cyrillic_schwa: number;
        const KEY_Cyrillic_sha: number;
        const KEY_Cyrillic_shcha: number;
        const KEY_Cyrillic_shha: number;
        const KEY_Cyrillic_shorti: number;
        const KEY_Cyrillic_softsign: number;
        const KEY_Cyrillic_te: number;
        const KEY_Cyrillic_tse: number;
        const KEY_Cyrillic_u: number;
        const KEY_Cyrillic_u_macron: number;
        const KEY_Cyrillic_u_straight: number;
        const KEY_Cyrillic_u_straight_bar: number;
        const KEY_Cyrillic_ve: number;
        const KEY_Cyrillic_ya: number;
        const KEY_Cyrillic_yeru: number;
        const KEY_Cyrillic_yu: number;
        const KEY_Cyrillic_ze: number;
        const KEY_Cyrillic_zhe: number;
        const KEY_Cyrillic_zhe_descender: number;
        const KEY_D: number;
        const KEY_DOS: number;
        const KEY_Dabovedot: number;
        const KEY_Dcaron: number;
        const KEY_Delete: number;
        const KEY_Display: number;
        const KEY_Documents: number;
        const KEY_DongSign: number;
        const KEY_Down: number;
        const KEY_Dstroke: number;
        const KEY_E: number;
        const KEY_ENG: number;
        const KEY_ETH: number;
        const KEY_EZH: number;
        const KEY_Eabovedot: number;
        const KEY_Eacute: number;
        const KEY_Ebelowdot: number;
        const KEY_Ecaron: number;
        const KEY_Ecircumflex: number;
        const KEY_Ecircumflexacute: number;
        const KEY_Ecircumflexbelowdot: number;
        const KEY_Ecircumflexgrave: number;
        const KEY_Ecircumflexhook: number;
        const KEY_Ecircumflextilde: number;
        const KEY_EcuSign: number;
        const KEY_Ediaeresis: number;
        const KEY_Egrave: number;
        const KEY_Ehook: number;
        const KEY_Eisu_Shift: number;
        const KEY_Eisu_toggle: number;
        const KEY_Eject: number;
        const KEY_Emacron: number;
        const KEY_End: number;
        const KEY_Eogonek: number;
        const KEY_Escape: number;
        const KEY_Eth: number;
        const KEY_Etilde: number;
        const KEY_EuroSign: number;
        const KEY_Excel: number;
        const KEY_Execute: number;
        const KEY_Explorer: number;
        const KEY_F: number;
        const KEY_F1: number;
        const KEY_F10: number;
        const KEY_F11: number;
        const KEY_F12: number;
        const KEY_F13: number;
        const KEY_F14: number;
        const KEY_F15: number;
        const KEY_F16: number;
        const KEY_F17: number;
        const KEY_F18: number;
        const KEY_F19: number;
        const KEY_F2: number;
        const KEY_F20: number;
        const KEY_F21: number;
        const KEY_F22: number;
        const KEY_F23: number;
        const KEY_F24: number;
        const KEY_F25: number;
        const KEY_F26: number;
        const KEY_F27: number;
        const KEY_F28: number;
        const KEY_F29: number;
        const KEY_F3: number;
        const KEY_F30: number;
        const KEY_F31: number;
        const KEY_F32: number;
        const KEY_F33: number;
        const KEY_F34: number;
        const KEY_F35: number;
        const KEY_F4: number;
        const KEY_F5: number;
        const KEY_F6: number;
        const KEY_F7: number;
        const KEY_F8: number;
        const KEY_F9: number;
        const KEY_FFrancSign: number;
        const KEY_Fabovedot: number;
        const KEY_Farsi_0: number;
        const KEY_Farsi_1: number;
        const KEY_Farsi_2: number;
        const KEY_Farsi_3: number;
        const KEY_Farsi_4: number;
        const KEY_Farsi_5: number;
        const KEY_Farsi_6: number;
        const KEY_Farsi_7: number;
        const KEY_Farsi_8: number;
        const KEY_Farsi_9: number;
        const KEY_Farsi_yeh: number;
        const KEY_Favorites: number;
        const KEY_Finance: number;
        const KEY_Find: number;
        const KEY_First_Virtual_Screen: number;
        const KEY_Forward: number;
        const KEY_FrameBack: number;
        const KEY_FrameForward: number;
        const KEY_G: number;
        const KEY_Gabovedot: number;
        const KEY_Game: number;
        const KEY_Gbreve: number;
        const KEY_Gcaron: number;
        const KEY_Gcedilla: number;
        const KEY_Gcircumflex: number;
        const KEY_Georgian_an: number;
        const KEY_Georgian_ban: number;
        const KEY_Georgian_can: number;
        const KEY_Georgian_char: number;
        const KEY_Georgian_chin: number;
        const KEY_Georgian_cil: number;
        const KEY_Georgian_don: number;
        const KEY_Georgian_en: number;
        const KEY_Georgian_fi: number;
        const KEY_Georgian_gan: number;
        const KEY_Georgian_ghan: number;
        const KEY_Georgian_hae: number;
        const KEY_Georgian_har: number;
        const KEY_Georgian_he: number;
        const KEY_Georgian_hie: number;
        const KEY_Georgian_hoe: number;
        const KEY_Georgian_in: number;
        const KEY_Georgian_jhan: number;
        const KEY_Georgian_jil: number;
        const KEY_Georgian_kan: number;
        const KEY_Georgian_khar: number;
        const KEY_Georgian_las: number;
        const KEY_Georgian_man: number;
        const KEY_Georgian_nar: number;
        const KEY_Georgian_on: number;
        const KEY_Georgian_par: number;
        const KEY_Georgian_phar: number;
        const KEY_Georgian_qar: number;
        const KEY_Georgian_rae: number;
        const KEY_Georgian_san: number;
        const KEY_Georgian_shin: number;
        const KEY_Georgian_tan: number;
        const KEY_Georgian_tar: number;
        const KEY_Georgian_un: number;
        const KEY_Georgian_vin: number;
        const KEY_Georgian_we: number;
        const KEY_Georgian_xan: number;
        const KEY_Georgian_zen: number;
        const KEY_Georgian_zhar: number;
        const KEY_Go: number;
        const KEY_Greek_ALPHA: number;
        const KEY_Greek_ALPHAaccent: number;
        const KEY_Greek_BETA: number;
        const KEY_Greek_CHI: number;
        const KEY_Greek_DELTA: number;
        const KEY_Greek_EPSILON: number;
        const KEY_Greek_EPSILONaccent: number;
        const KEY_Greek_ETA: number;
        const KEY_Greek_ETAaccent: number;
        const KEY_Greek_GAMMA: number;
        const KEY_Greek_IOTA: number;
        const KEY_Greek_IOTAaccent: number;
        const KEY_Greek_IOTAdiaeresis: number;
        const KEY_Greek_IOTAdieresis: number;
        const KEY_Greek_KAPPA: number;
        const KEY_Greek_LAMBDA: number;
        const KEY_Greek_LAMDA: number;
        const KEY_Greek_MU: number;
        const KEY_Greek_NU: number;
        const KEY_Greek_OMEGA: number;
        const KEY_Greek_OMEGAaccent: number;
        const KEY_Greek_OMICRON: number;
        const KEY_Greek_OMICRONaccent: number;
        const KEY_Greek_PHI: number;
        const KEY_Greek_PI: number;
        const KEY_Greek_PSI: number;
        const KEY_Greek_RHO: number;
        const KEY_Greek_SIGMA: number;
        const KEY_Greek_TAU: number;
        const KEY_Greek_THETA: number;
        const KEY_Greek_UPSILON: number;
        const KEY_Greek_UPSILONaccent: number;
        const KEY_Greek_UPSILONdieresis: number;
        const KEY_Greek_XI: number;
        const KEY_Greek_ZETA: number;
        const KEY_Greek_accentdieresis: number;
        const KEY_Greek_alpha: number;
        const KEY_Greek_alphaaccent: number;
        const KEY_Greek_beta: number;
        const KEY_Greek_chi: number;
        const KEY_Greek_delta: number;
        const KEY_Greek_epsilon: number;
        const KEY_Greek_epsilonaccent: number;
        const KEY_Greek_eta: number;
        const KEY_Greek_etaaccent: number;
        const KEY_Greek_finalsmallsigma: number;
        const KEY_Greek_gamma: number;
        const KEY_Greek_horizbar: number;
        const KEY_Greek_iota: number;
        const KEY_Greek_iotaaccent: number;
        const KEY_Greek_iotaaccentdieresis: number;
        const KEY_Greek_iotadieresis: number;
        const KEY_Greek_kappa: number;
        const KEY_Greek_lambda: number;
        const KEY_Greek_lamda: number;
        const KEY_Greek_mu: number;
        const KEY_Greek_nu: number;
        const KEY_Greek_omega: number;
        const KEY_Greek_omegaaccent: number;
        const KEY_Greek_omicron: number;
        const KEY_Greek_omicronaccent: number;
        const KEY_Greek_phi: number;
        const KEY_Greek_pi: number;
        const KEY_Greek_psi: number;
        const KEY_Greek_rho: number;
        const KEY_Greek_sigma: number;
        const KEY_Greek_switch: number;
        const KEY_Greek_tau: number;
        const KEY_Greek_theta: number;
        const KEY_Greek_upsilon: number;
        const KEY_Greek_upsilonaccent: number;
        const KEY_Greek_upsilonaccentdieresis: number;
        const KEY_Greek_upsilondieresis: number;
        const KEY_Greek_xi: number;
        const KEY_Greek_zeta: number;
        const KEY_Green: number;
        const KEY_H: number;
        const KEY_Hangul: number;
        const KEY_Hangul_A: number;
        const KEY_Hangul_AE: number;
        const KEY_Hangul_AraeA: number;
        const KEY_Hangul_AraeAE: number;
        const KEY_Hangul_Banja: number;
        const KEY_Hangul_Cieuc: number;
        const KEY_Hangul_Codeinput: number;
        const KEY_Hangul_Dikeud: number;
        const KEY_Hangul_E: number;
        const KEY_Hangul_EO: number;
        const KEY_Hangul_EU: number;
        const KEY_Hangul_End: number;
        const KEY_Hangul_Hanja: number;
        const KEY_Hangul_Hieuh: number;
        const KEY_Hangul_I: number;
        const KEY_Hangul_Ieung: number;
        const KEY_Hangul_J_Cieuc: number;
        const KEY_Hangul_J_Dikeud: number;
        const KEY_Hangul_J_Hieuh: number;
        const KEY_Hangul_J_Ieung: number;
        const KEY_Hangul_J_Jieuj: number;
        const KEY_Hangul_J_Khieuq: number;
        const KEY_Hangul_J_Kiyeog: number;
        const KEY_Hangul_J_KiyeogSios: number;
        const KEY_Hangul_J_KkogjiDalrinIeung: number;
        const KEY_Hangul_J_Mieum: number;
        const KEY_Hangul_J_Nieun: number;
        const KEY_Hangul_J_NieunHieuh: number;
        const KEY_Hangul_J_NieunJieuj: number;
        const KEY_Hangul_J_PanSios: number;
        const KEY_Hangul_J_Phieuf: number;
        const KEY_Hangul_J_Pieub: number;
        const KEY_Hangul_J_PieubSios: number;
        const KEY_Hangul_J_Rieul: number;
        const KEY_Hangul_J_RieulHieuh: number;
        const KEY_Hangul_J_RieulKiyeog: number;
        const KEY_Hangul_J_RieulMieum: number;
        const KEY_Hangul_J_RieulPhieuf: number;
        const KEY_Hangul_J_RieulPieub: number;
        const KEY_Hangul_J_RieulSios: number;
        const KEY_Hangul_J_RieulTieut: number;
        const KEY_Hangul_J_Sios: number;
        const KEY_Hangul_J_SsangKiyeog: number;
        const KEY_Hangul_J_SsangSios: number;
        const KEY_Hangul_J_Tieut: number;
        const KEY_Hangul_J_YeorinHieuh: number;
        const KEY_Hangul_Jamo: number;
        const KEY_Hangul_Jeonja: number;
        const KEY_Hangul_Jieuj: number;
        const KEY_Hangul_Khieuq: number;
        const KEY_Hangul_Kiyeog: number;
        const KEY_Hangul_KiyeogSios: number;
        const KEY_Hangul_KkogjiDalrinIeung: number;
        const KEY_Hangul_Mieum: number;
        const KEY_Hangul_MultipleCandidate: number;
        const KEY_Hangul_Nieun: number;
        const KEY_Hangul_NieunHieuh: number;
        const KEY_Hangul_NieunJieuj: number;
        const KEY_Hangul_O: number;
        const KEY_Hangul_OE: number;
        const KEY_Hangul_PanSios: number;
        const KEY_Hangul_Phieuf: number;
        const KEY_Hangul_Pieub: number;
        const KEY_Hangul_PieubSios: number;
        const KEY_Hangul_PostHanja: number;
        const KEY_Hangul_PreHanja: number;
        const KEY_Hangul_PreviousCandidate: number;
        const KEY_Hangul_Rieul: number;
        const KEY_Hangul_RieulHieuh: number;
        const KEY_Hangul_RieulKiyeog: number;
        const KEY_Hangul_RieulMieum: number;
        const KEY_Hangul_RieulPhieuf: number;
        const KEY_Hangul_RieulPieub: number;
        const KEY_Hangul_RieulSios: number;
        const KEY_Hangul_RieulTieut: number;
        const KEY_Hangul_RieulYeorinHieuh: number;
        const KEY_Hangul_Romaja: number;
        const KEY_Hangul_SingleCandidate: number;
        const KEY_Hangul_Sios: number;
        const KEY_Hangul_Special: number;
        const KEY_Hangul_SsangDikeud: number;
        const KEY_Hangul_SsangJieuj: number;
        const KEY_Hangul_SsangKiyeog: number;
        const KEY_Hangul_SsangPieub: number;
        const KEY_Hangul_SsangSios: number;
        const KEY_Hangul_Start: number;
        const KEY_Hangul_SunkyeongeumMieum: number;
        const KEY_Hangul_SunkyeongeumPhieuf: number;
        const KEY_Hangul_SunkyeongeumPieub: number;
        const KEY_Hangul_Tieut: number;
        const KEY_Hangul_U: number;
        const KEY_Hangul_WA: number;
        const KEY_Hangul_WAE: number;
        const KEY_Hangul_WE: number;
        const KEY_Hangul_WEO: number;
        const KEY_Hangul_WI: number;
        const KEY_Hangul_YA: number;
        const KEY_Hangul_YAE: number;
        const KEY_Hangul_YE: number;
        const KEY_Hangul_YEO: number;
        const KEY_Hangul_YI: number;
        const KEY_Hangul_YO: number;
        const KEY_Hangul_YU: number;
        const KEY_Hangul_YeorinHieuh: number;
        const KEY_Hangul_switch: number;
        const KEY_Hankaku: number;
        const KEY_Hcircumflex: number;
        const KEY_Hebrew_switch: number;
        const KEY_Help: number;
        const KEY_Henkan: number;
        const KEY_Henkan_Mode: number;
        const KEY_Hibernate: number;
        const KEY_Hiragana: number;
        const KEY_Hiragana_Katakana: number;
        const KEY_History: number;
        const KEY_Home: number;
        const KEY_HomePage: number;
        const KEY_HotLinks: number;
        const KEY_Hstroke: number;
        const KEY_Hyper_L: number;
        const KEY_Hyper_R: number;
        const KEY_I: number;
        const KEY_ISO_Center_Object: number;
        const KEY_ISO_Continuous_Underline: number;
        const KEY_ISO_Discontinuous_Underline: number;
        const KEY_ISO_Emphasize: number;
        const KEY_ISO_Enter: number;
        const KEY_ISO_Fast_Cursor_Down: number;
        const KEY_ISO_Fast_Cursor_Left: number;
        const KEY_ISO_Fast_Cursor_Right: number;
        const KEY_ISO_Fast_Cursor_Up: number;
        const KEY_ISO_First_Group: number;
        const KEY_ISO_First_Group_Lock: number;
        const KEY_ISO_Group_Latch: number;
        const KEY_ISO_Group_Lock: number;
        const KEY_ISO_Group_Shift: number;
        const KEY_ISO_Last_Group: number;
        const KEY_ISO_Last_Group_Lock: number;
        const KEY_ISO_Left_Tab: number;
        const KEY_ISO_Level2_Latch: number;
        const KEY_ISO_Level3_Latch: number;
        const KEY_ISO_Level3_Lock: number;
        const KEY_ISO_Level3_Shift: number;
        const KEY_ISO_Level5_Latch: number;
        const KEY_ISO_Level5_Lock: number;
        const KEY_ISO_Level5_Shift: number;
        const KEY_ISO_Lock: number;
        const KEY_ISO_Move_Line_Down: number;
        const KEY_ISO_Move_Line_Up: number;
        const KEY_ISO_Next_Group: number;
        const KEY_ISO_Next_Group_Lock: number;
        const KEY_ISO_Partial_Line_Down: number;
        const KEY_ISO_Partial_Line_Up: number;
        const KEY_ISO_Partial_Space_Left: number;
        const KEY_ISO_Partial_Space_Right: number;
        const KEY_ISO_Prev_Group: number;
        const KEY_ISO_Prev_Group_Lock: number;
        const KEY_ISO_Release_Both_Margins: number;
        const KEY_ISO_Release_Margin_Left: number;
        const KEY_ISO_Release_Margin_Right: number;
        const KEY_ISO_Set_Margin_Left: number;
        const KEY_ISO_Set_Margin_Right: number;
        const KEY_Iabovedot: number;
        const KEY_Iacute: number;
        const KEY_Ibelowdot: number;
        const KEY_Ibreve: number;
        const KEY_Icircumflex: number;
        const KEY_Idiaeresis: number;
        const KEY_Igrave: number;
        const KEY_Ihook: number;
        const KEY_Imacron: number;
        const KEY_Insert: number;
        const KEY_Iogonek: number;
        const KEY_Itilde: number;
        const KEY_J: number;
        const KEY_Jcircumflex: number;
        const KEY_K: number;
        const KEY_KP_0: number;
        const KEY_KP_1: number;
        const KEY_KP_2: number;
        const KEY_KP_3: number;
        const KEY_KP_4: number;
        const KEY_KP_5: number;
        const KEY_KP_6: number;
        const KEY_KP_7: number;
        const KEY_KP_8: number;
        const KEY_KP_9: number;
        const KEY_KP_Add: number;
        const KEY_KP_Begin: number;
        const KEY_KP_Decimal: number;
        const KEY_KP_Delete: number;
        const KEY_KP_Divide: number;
        const KEY_KP_Down: number;
        const KEY_KP_End: number;
        const KEY_KP_Enter: number;
        const KEY_KP_Equal: number;
        const KEY_KP_F1: number;
        const KEY_KP_F2: number;
        const KEY_KP_F3: number;
        const KEY_KP_F4: number;
        const KEY_KP_Home: number;
        const KEY_KP_Insert: number;
        const KEY_KP_Left: number;
        const KEY_KP_Multiply: number;
        const KEY_KP_Next: number;
        const KEY_KP_Page_Down: number;
        const KEY_KP_Page_Up: number;
        const KEY_KP_Prior: number;
        const KEY_KP_Right: number;
        const KEY_KP_Separator: number;
        const KEY_KP_Space: number;
        const KEY_KP_Subtract: number;
        const KEY_KP_Tab: number;
        const KEY_KP_Up: number;
        const KEY_Kana_Lock: number;
        const KEY_Kana_Shift: number;
        const KEY_Kanji: number;
        const KEY_Kanji_Bangou: number;
        const KEY_Katakana: number;
        const KEY_KbdBrightnessDown: number;
        const KEY_KbdBrightnessUp: number;
        const KEY_KbdLightOnOff: number;
        const KEY_Kcedilla: number;
        const KEY_Keyboard: number;
        const KEY_Korean_Won: number;
        const KEY_L: number;
        const KEY_L1: number;
        const KEY_L10: number;
        const KEY_L2: number;
        const KEY_L3: number;
        const KEY_L4: number;
        const KEY_L5: number;
        const KEY_L6: number;
        const KEY_L7: number;
        const KEY_L8: number;
        const KEY_L9: number;
        const KEY_Lacute: number;
        const KEY_Last_Virtual_Screen: number;
        const KEY_Launch0: number;
        const KEY_Launch1: number;
        const KEY_Launch2: number;
        const KEY_Launch3: number;
        const KEY_Launch4: number;
        const KEY_Launch5: number;
        const KEY_Launch6: number;
        const KEY_Launch7: number;
        const KEY_Launch8: number;
        const KEY_Launch9: number;
        const KEY_LaunchA: number;
        const KEY_LaunchB: number;
        const KEY_LaunchC: number;
        const KEY_LaunchD: number;
        const KEY_LaunchE: number;
        const KEY_LaunchF: number;
        const KEY_Lbelowdot: number;
        const KEY_Lcaron: number;
        const KEY_Lcedilla: number;
        const KEY_Left: number;
        const KEY_LightBulb: number;
        const KEY_Linefeed: number;
        const KEY_LiraSign: number;
        const KEY_LogGrabInfo: number;
        const KEY_LogOff: number;
        const KEY_LogWindowTree: number;
        const KEY_Lstroke: number;
        const KEY_M: number;
        const KEY_Mabovedot: number;
        const KEY_Macedonia_DSE: number;
        const KEY_Macedonia_GJE: number;
        const KEY_Macedonia_KJE: number;
        const KEY_Macedonia_dse: number;
        const KEY_Macedonia_gje: number;
        const KEY_Macedonia_kje: number;
        const KEY_Mae_Koho: number;
        const KEY_Mail: number;
        const KEY_MailForward: number;
        const KEY_Market: number;
        const KEY_Massyo: number;
        const KEY_Meeting: number;
        const KEY_Memo: number;
        const KEY_Menu: number;
        const KEY_MenuKB: number;
        const KEY_MenuPB: number;
        const KEY_Messenger: number;
        const KEY_Meta_L: number;
        const KEY_Meta_R: number;
        const KEY_MillSign: number;
        const KEY_ModeLock: number;
        const KEY_Mode_switch: number;
        const KEY_MonBrightnessDown: number;
        const KEY_MonBrightnessUp: number;
        const KEY_MouseKeys_Accel_Enable: number;
        const KEY_MouseKeys_Enable: number;
        const KEY_Muhenkan: number;
        const KEY_Multi_key: number;
        const KEY_MultipleCandidate: number;
        const KEY_Music: number;
        const KEY_MyComputer: number;
        const KEY_MySites: number;
        const KEY_N: number;
        const KEY_Nacute: number;
        const KEY_NairaSign: number;
        const KEY_Ncaron: number;
        const KEY_Ncedilla: number;
        const KEY_New: number;
        const KEY_NewSheqelSign: number;
        const KEY_News: number;
        const KEY_Next: number;
        const KEY_Next_VMode: number;
        const KEY_Next_Virtual_Screen: number;
        const KEY_Ntilde: number;
        const KEY_Num_Lock: number;
        const KEY_O: number;
        const KEY_OE: number;
        const KEY_Oacute: number;
        const KEY_Obarred: number;
        const KEY_Obelowdot: number;
        const KEY_Ocaron: number;
        const KEY_Ocircumflex: number;
        const KEY_Ocircumflexacute: number;
        const KEY_Ocircumflexbelowdot: number;
        const KEY_Ocircumflexgrave: number;
        const KEY_Ocircumflexhook: number;
        const KEY_Ocircumflextilde: number;
        const KEY_Odiaeresis: number;
        const KEY_Odoubleacute: number;
        const KEY_OfficeHome: number;
        const KEY_Ograve: number;
        const KEY_Ohook: number;
        const KEY_Ohorn: number;
        const KEY_Ohornacute: number;
        const KEY_Ohornbelowdot: number;
        const KEY_Ohorngrave: number;
        const KEY_Ohornhook: number;
        const KEY_Ohorntilde: number;
        const KEY_Omacron: number;
        const KEY_Ooblique: number;
        const KEY_Open: number;
        const KEY_OpenURL: number;
        const KEY_Option: number;
        const KEY_Oslash: number;
        const KEY_Otilde: number;
        const KEY_Overlay1_Enable: number;
        const KEY_Overlay2_Enable: number;
        const KEY_P: number;
        const KEY_Pabovedot: number;
        const KEY_Page_Down: number;
        const KEY_Page_Up: number;
        const KEY_Paste: number;
        const KEY_Pause: number;
        const KEY_PesetaSign: number;
        const KEY_Phone: number;
        const KEY_Pictures: number;
        const KEY_Pointer_Accelerate: number;
        const KEY_Pointer_Button1: number;
        const KEY_Pointer_Button2: number;
        const KEY_Pointer_Button3: number;
        const KEY_Pointer_Button4: number;
        const KEY_Pointer_Button5: number;
        const KEY_Pointer_Button_Dflt: number;
        const KEY_Pointer_DblClick1: number;
        const KEY_Pointer_DblClick2: number;
        const KEY_Pointer_DblClick3: number;
        const KEY_Pointer_DblClick4: number;
        const KEY_Pointer_DblClick5: number;
        const KEY_Pointer_DblClick_Dflt: number;
        const KEY_Pointer_DfltBtnNext: number;
        const KEY_Pointer_DfltBtnPrev: number;
        const KEY_Pointer_Down: number;
        const KEY_Pointer_DownLeft: number;
        const KEY_Pointer_DownRight: number;
        const KEY_Pointer_Drag1: number;
        const KEY_Pointer_Drag2: number;
        const KEY_Pointer_Drag3: number;
        const KEY_Pointer_Drag4: number;
        const KEY_Pointer_Drag5: number;
        const KEY_Pointer_Drag_Dflt: number;
        const KEY_Pointer_EnableKeys: number;
        const KEY_Pointer_Left: number;
        const KEY_Pointer_Right: number;
        const KEY_Pointer_Up: number;
        const KEY_Pointer_UpLeft: number;
        const KEY_Pointer_UpRight: number;
        const KEY_PowerDown: number;
        const KEY_PowerOff: number;
        const KEY_Prev_VMode: number;
        const KEY_Prev_Virtual_Screen: number;
        const KEY_PreviousCandidate: number;
        const KEY_Print: number;
        const KEY_Prior: number;
        const KEY_Q: number;
        const KEY_R: number;
        const KEY_R1: number;
        const KEY_R10: number;
        const KEY_R11: number;
        const KEY_R12: number;
        const KEY_R13: number;
        const KEY_R14: number;
        const KEY_R15: number;
        const KEY_R2: number;
        const KEY_R3: number;
        const KEY_R4: number;
        const KEY_R5: number;
        const KEY_R6: number;
        const KEY_R7: number;
        const KEY_R8: number;
        const KEY_R9: number;
        const KEY_RFKill: number;
        const KEY_Racute: number;
        const KEY_Rcaron: number;
        const KEY_Rcedilla: number;
        const KEY_Red: number;
        const KEY_Redo: number;
        const KEY_Refresh: number;
        const KEY_Reload: number;
        const KEY_RepeatKeys_Enable: number;
        const KEY_Reply: number;
        const KEY_Return: number;
        const KEY_Right: number;
        const KEY_RockerDown: number;
        const KEY_RockerEnter: number;
        const KEY_RockerUp: number;
        const KEY_Romaji: number;
        const KEY_RotateWindows: number;
        const KEY_RotationKB: number;
        const KEY_RotationPB: number;
        const KEY_RupeeSign: number;
        const KEY_S: number;
        const KEY_SCHWA: number;
        const KEY_Sabovedot: number;
        const KEY_Sacute: number;
        const KEY_Save: number;
        const KEY_Scaron: number;
        const KEY_Scedilla: number;
        const KEY_Scircumflex: number;
        const KEY_ScreenSaver: number;
        const KEY_ScrollClick: number;
        const KEY_ScrollDown: number;
        const KEY_ScrollUp: number;
        const KEY_Scroll_Lock: number;
        const KEY_Search: number;
        const KEY_Select: number;
        const KEY_SelectButton: number;
        const KEY_Send: number;
        const KEY_Serbian_DJE: number;
        const KEY_Serbian_DZE: number;
        const KEY_Serbian_JE: number;
        const KEY_Serbian_LJE: number;
        const KEY_Serbian_NJE: number;
        const KEY_Serbian_TSHE: number;
        const KEY_Serbian_dje: number;
        const KEY_Serbian_dze: number;
        const KEY_Serbian_je: number;
        const KEY_Serbian_lje: number;
        const KEY_Serbian_nje: number;
        const KEY_Serbian_tshe: number;
        const KEY_Shift_L: number;
        const KEY_Shift_Lock: number;
        const KEY_Shift_R: number;
        const KEY_Shop: number;
        const KEY_SingleCandidate: number;
        const KEY_Sinh_a: number;
        const KEY_Sinh_aa: number;
        const KEY_Sinh_aa2: number;
        const KEY_Sinh_ae: number;
        const KEY_Sinh_ae2: number;
        const KEY_Sinh_aee: number;
        const KEY_Sinh_aee2: number;
        const KEY_Sinh_ai: number;
        const KEY_Sinh_ai2: number;
        const KEY_Sinh_al: number;
        const KEY_Sinh_au: number;
        const KEY_Sinh_au2: number;
        const KEY_Sinh_ba: number;
        const KEY_Sinh_bha: number;
        const KEY_Sinh_ca: number;
        const KEY_Sinh_cha: number;
        const KEY_Sinh_dda: number;
        const KEY_Sinh_ddha: number;
        const KEY_Sinh_dha: number;
        const KEY_Sinh_dhha: number;
        const KEY_Sinh_e: number;
        const KEY_Sinh_e2: number;
        const KEY_Sinh_ee: number;
        const KEY_Sinh_ee2: number;
        const KEY_Sinh_fa: number;
        const KEY_Sinh_ga: number;
        const KEY_Sinh_gha: number;
        const KEY_Sinh_h2: number;
        const KEY_Sinh_ha: number;
        const KEY_Sinh_i: number;
        const KEY_Sinh_i2: number;
        const KEY_Sinh_ii: number;
        const KEY_Sinh_ii2: number;
        const KEY_Sinh_ja: number;
        const KEY_Sinh_jha: number;
        const KEY_Sinh_jnya: number;
        const KEY_Sinh_ka: number;
        const KEY_Sinh_kha: number;
        const KEY_Sinh_kunddaliya: number;
        const KEY_Sinh_la: number;
        const KEY_Sinh_lla: number;
        const KEY_Sinh_lu: number;
        const KEY_Sinh_lu2: number;
        const KEY_Sinh_luu: number;
        const KEY_Sinh_luu2: number;
        const KEY_Sinh_ma: number;
        const KEY_Sinh_mba: number;
        const KEY_Sinh_na: number;
        const KEY_Sinh_ndda: number;
        const KEY_Sinh_ndha: number;
        const KEY_Sinh_ng: number;
        const KEY_Sinh_ng2: number;
        const KEY_Sinh_nga: number;
        const KEY_Sinh_nja: number;
        const KEY_Sinh_nna: number;
        const KEY_Sinh_nya: number;
        const KEY_Sinh_o: number;
        const KEY_Sinh_o2: number;
        const KEY_Sinh_oo: number;
        const KEY_Sinh_oo2: number;
        const KEY_Sinh_pa: number;
        const KEY_Sinh_pha: number;
        const KEY_Sinh_ra: number;
        const KEY_Sinh_ri: number;
        const KEY_Sinh_rii: number;
        const KEY_Sinh_ru2: number;
        const KEY_Sinh_ruu2: number;
        const KEY_Sinh_sa: number;
        const KEY_Sinh_sha: number;
        const KEY_Sinh_ssha: number;
        const KEY_Sinh_tha: number;
        const KEY_Sinh_thha: number;
        const KEY_Sinh_tta: number;
        const KEY_Sinh_ttha: number;
        const KEY_Sinh_u: number;
        const KEY_Sinh_u2: number;
        const KEY_Sinh_uu: number;
        const KEY_Sinh_uu2: number;
        const KEY_Sinh_va: number;
        const KEY_Sinh_ya: number;
        const KEY_Sleep: number;
        const KEY_SlowKeys_Enable: number;
        const KEY_Spell: number;
        const KEY_SplitScreen: number;
        const KEY_Standby: number;
        const KEY_Start: number;
        const KEY_StickyKeys_Enable: number;
        const KEY_Stop: number;
        const KEY_Subtitle: number;
        const KEY_Super_L: number;
        const KEY_Super_R: number;
        const KEY_Support: number;
        const KEY_Suspend: number;
        const KEY_Switch_VT_1: number;
        const KEY_Switch_VT_10: number;
        const KEY_Switch_VT_11: number;
        const KEY_Switch_VT_12: number;
        const KEY_Switch_VT_2: number;
        const KEY_Switch_VT_3: number;
        const KEY_Switch_VT_4: number;
        const KEY_Switch_VT_5: number;
        const KEY_Switch_VT_6: number;
        const KEY_Switch_VT_7: number;
        const KEY_Switch_VT_8: number;
        const KEY_Switch_VT_9: number;
        const KEY_Sys_Req: number;
        const KEY_T: number;
        const KEY_THORN: number;
        const KEY_Tab: number;
        const KEY_Tabovedot: number;
        const KEY_TaskPane: number;
        const KEY_Tcaron: number;
        const KEY_Tcedilla: number;
        const KEY_Terminal: number;
        const KEY_Terminate_Server: number;
        const KEY_Thai_baht: number;
        const KEY_Thai_bobaimai: number;
        const KEY_Thai_chochan: number;
        const KEY_Thai_chochang: number;
        const KEY_Thai_choching: number;
        const KEY_Thai_chochoe: number;
        const KEY_Thai_dochada: number;
        const KEY_Thai_dodek: number;
        const KEY_Thai_fofa: number;
        const KEY_Thai_fofan: number;
        const KEY_Thai_hohip: number;
        const KEY_Thai_honokhuk: number;
        const KEY_Thai_khokhai: number;
        const KEY_Thai_khokhon: number;
        const KEY_Thai_khokhuat: number;
        const KEY_Thai_khokhwai: number;
        const KEY_Thai_khorakhang: number;
        const KEY_Thai_kokai: number;
        const KEY_Thai_lakkhangyao: number;
        const KEY_Thai_lekchet: number;
        const KEY_Thai_lekha: number;
        const KEY_Thai_lekhok: number;
        const KEY_Thai_lekkao: number;
        const KEY_Thai_leknung: number;
        const KEY_Thai_lekpaet: number;
        const KEY_Thai_leksam: number;
        const KEY_Thai_leksi: number;
        const KEY_Thai_leksong: number;
        const KEY_Thai_leksun: number;
        const KEY_Thai_lochula: number;
        const KEY_Thai_loling: number;
        const KEY_Thai_lu: number;
        const KEY_Thai_maichattawa: number;
        const KEY_Thai_maiek: number;
        const KEY_Thai_maihanakat: number;
        const KEY_Thai_maihanakat_maitho: number;
        const KEY_Thai_maitaikhu: number;
        const KEY_Thai_maitho: number;
        const KEY_Thai_maitri: number;
        const KEY_Thai_maiyamok: number;
        const KEY_Thai_moma: number;
        const KEY_Thai_ngongu: number;
        const KEY_Thai_nikhahit: number;
        const KEY_Thai_nonen: number;
        const KEY_Thai_nonu: number;
        const KEY_Thai_oang: number;
        const KEY_Thai_paiyannoi: number;
        const KEY_Thai_phinthu: number;
        const KEY_Thai_phophan: number;
        const KEY_Thai_phophung: number;
        const KEY_Thai_phosamphao: number;
        const KEY_Thai_popla: number;
        const KEY_Thai_rorua: number;
        const KEY_Thai_ru: number;
        const KEY_Thai_saraa: number;
        const KEY_Thai_saraaa: number;
        const KEY_Thai_saraae: number;
        const KEY_Thai_saraaimaimalai: number;
        const KEY_Thai_saraaimaimuan: number;
        const KEY_Thai_saraam: number;
        const KEY_Thai_sarae: number;
        const KEY_Thai_sarai: number;
        const KEY_Thai_saraii: number;
        const KEY_Thai_sarao: number;
        const KEY_Thai_sarau: number;
        const KEY_Thai_saraue: number;
        const KEY_Thai_sarauee: number;
        const KEY_Thai_sarauu: number;
        const KEY_Thai_sorusi: number;
        const KEY_Thai_sosala: number;
        const KEY_Thai_soso: number;
        const KEY_Thai_sosua: number;
        const KEY_Thai_thanthakhat: number;
        const KEY_Thai_thonangmontho: number;
        const KEY_Thai_thophuthao: number;
        const KEY_Thai_thothahan: number;
        const KEY_Thai_thothan: number;
        const KEY_Thai_thothong: number;
        const KEY_Thai_thothung: number;
        const KEY_Thai_topatak: number;
        const KEY_Thai_totao: number;
        const KEY_Thai_wowaen: number;
        const KEY_Thai_yoyak: number;
        const KEY_Thai_yoying: number;
        const KEY_Thorn: number;
        const KEY_Time: number;
        const KEY_ToDoList: number;
        const KEY_Tools: number;
        const KEY_TopMenu: number;
        const KEY_TouchpadOff: number;
        const KEY_TouchpadOn: number;
        const KEY_TouchpadToggle: number;
        const KEY_Touroku: number;
        const KEY_Travel: number;
        const KEY_Tslash: number;
        const KEY_U: number;
        const KEY_UWB: number;
        const KEY_Uacute: number;
        const KEY_Ubelowdot: number;
        const KEY_Ubreve: number;
        const KEY_Ucircumflex: number;
        const KEY_Udiaeresis: number;
        const KEY_Udoubleacute: number;
        const KEY_Ugrave: number;
        const KEY_Uhook: number;
        const KEY_Uhorn: number;
        const KEY_Uhornacute: number;
        const KEY_Uhornbelowdot: number;
        const KEY_Uhorngrave: number;
        const KEY_Uhornhook: number;
        const KEY_Uhorntilde: number;
        const KEY_Ukrainian_GHE_WITH_UPTURN: number;
        const KEY_Ukrainian_I: number;
        const KEY_Ukrainian_IE: number;
        const KEY_Ukrainian_YI: number;
        const KEY_Ukrainian_ghe_with_upturn: number;
        const KEY_Ukrainian_i: number;
        const KEY_Ukrainian_ie: number;
        const KEY_Ukrainian_yi: number;
        const KEY_Ukranian_I: number;
        const KEY_Ukranian_JE: number;
        const KEY_Ukranian_YI: number;
        const KEY_Ukranian_i: number;
        const KEY_Ukranian_je: number;
        const KEY_Ukranian_yi: number;
        const KEY_Umacron: number;
        const KEY_Undo: number;
        const KEY_Ungrab: number;
        const KEY_Uogonek: number;
        const KEY_Up: number;
        const KEY_Uring: number;
        const KEY_User1KB: number;
        const KEY_User2KB: number;
        const KEY_UserPB: number;
        const KEY_Utilde: number;
        const KEY_V: number;
        const KEY_VendorHome: number;
        const KEY_Video: number;
        const KEY_View: number;
        const KEY_VoidSymbol: number;
        const KEY_W: number;
        const KEY_WLAN: number;
        const KEY_WWAN: number;
        const KEY_WWW: number;
        const KEY_Wacute: number;
        const KEY_WakeUp: number;
        const KEY_Wcircumflex: number;
        const KEY_Wdiaeresis: number;
        const KEY_WebCam: number;
        const KEY_Wgrave: number;
        const KEY_WheelButton: number;
        const KEY_WindowClear: number;
        const KEY_WonSign: number;
        const KEY_Word: number;
        const KEY_X: number;
        const KEY_Xabovedot: number;
        const KEY_Xfer: number;
        const KEY_Y: number;
        const KEY_Yacute: number;
        const KEY_Ybelowdot: number;
        const KEY_Ycircumflex: number;
        const KEY_Ydiaeresis: number;
        const KEY_Yellow: number;
        const KEY_Ygrave: number;
        const KEY_Yhook: number;
        const KEY_Ytilde: number;
        const KEY_Z: number;
        const KEY_Zabovedot: number;
        const KEY_Zacute: number;
        const KEY_Zcaron: number;
        const KEY_Zen_Koho: number;
        const KEY_Zenkaku: number;
        const KEY_Zenkaku_Hankaku: number;
        const KEY_ZoomIn: number;
        const KEY_ZoomOut: number;
        const KEY_Zstroke: number;
        const KEY_a: number;
        const KEY_aacute: number;
        const KEY_abelowdot: number;
        const KEY_abovedot: number;
        const KEY_abreve: number;
        const KEY_abreveacute: number;
        const KEY_abrevebelowdot: number;
        const KEY_abrevegrave: number;
        const KEY_abrevehook: number;
        const KEY_abrevetilde: number;
        const KEY_acircumflex: number;
        const KEY_acircumflexacute: number;
        const KEY_acircumflexbelowdot: number;
        const KEY_acircumflexgrave: number;
        const KEY_acircumflexhook: number;
        const KEY_acircumflextilde: number;
        const KEY_acute: number;
        const KEY_adiaeresis: number;
        const KEY_ae: number;
        const KEY_agrave: number;
        const KEY_ahook: number;
        const KEY_amacron: number;
        const KEY_ampersand: number;
        const KEY_aogonek: number;
        const KEY_apostrophe: number;
        const KEY_approxeq: number;
        const KEY_approximate: number;
        const KEY_aring: number;
        const KEY_asciicircum: number;
        const KEY_asciitilde: number;
        const KEY_asterisk: number;
        const KEY_at: number;
        const KEY_atilde: number;
        const KEY_b: number;
        const KEY_babovedot: number;
        const KEY_backslash: number;
        const KEY_ballotcross: number;
        const KEY_bar: number;
        const KEY_because: number;
        const KEY_blank: number;
        const KEY_botintegral: number;
        const KEY_botleftparens: number;
        const KEY_botleftsqbracket: number;
        const KEY_botleftsummation: number;
        const KEY_botrightparens: number;
        const KEY_botrightsqbracket: number;
        const KEY_botrightsummation: number;
        const KEY_bott: number;
        const KEY_botvertsummationconnector: number;
        const KEY_braceleft: number;
        const KEY_braceright: number;
        const KEY_bracketleft: number;
        const KEY_bracketright: number;
        const KEY_braille_blank: number;
        const KEY_braille_dot_1: number;
        const KEY_braille_dot_10: number;
        const KEY_braille_dot_2: number;
        const KEY_braille_dot_3: number;
        const KEY_braille_dot_4: number;
        const KEY_braille_dot_5: number;
        const KEY_braille_dot_6: number;
        const KEY_braille_dot_7: number;
        const KEY_braille_dot_8: number;
        const KEY_braille_dot_9: number;
        const KEY_braille_dots_1: number;
        const KEY_braille_dots_12: number;
        const KEY_braille_dots_123: number;
        const KEY_braille_dots_1234: number;
        const KEY_braille_dots_12345: number;
        const KEY_braille_dots_123456: number;
        const KEY_braille_dots_1234567: number;
        const KEY_braille_dots_12345678: number;
        const KEY_braille_dots_1234568: number;
        const KEY_braille_dots_123457: number;
        const KEY_braille_dots_1234578: number;
        const KEY_braille_dots_123458: number;
        const KEY_braille_dots_12346: number;
        const KEY_braille_dots_123467: number;
        const KEY_braille_dots_1234678: number;
        const KEY_braille_dots_123468: number;
        const KEY_braille_dots_12347: number;
        const KEY_braille_dots_123478: number;
        const KEY_braille_dots_12348: number;
        const KEY_braille_dots_1235: number;
        const KEY_braille_dots_12356: number;
        const KEY_braille_dots_123567: number;
        const KEY_braille_dots_1235678: number;
        const KEY_braille_dots_123568: number;
        const KEY_braille_dots_12357: number;
        const KEY_braille_dots_123578: number;
        const KEY_braille_dots_12358: number;
        const KEY_braille_dots_1236: number;
        const KEY_braille_dots_12367: number;
        const KEY_braille_dots_123678: number;
        const KEY_braille_dots_12368: number;
        const KEY_braille_dots_1237: number;
        const KEY_braille_dots_12378: number;
        const KEY_braille_dots_1238: number;
        const KEY_braille_dots_124: number;
        const KEY_braille_dots_1245: number;
        const KEY_braille_dots_12456: number;
        const KEY_braille_dots_124567: number;
        const KEY_braille_dots_1245678: number;
        const KEY_braille_dots_124568: number;
        const KEY_braille_dots_12457: number;
        const KEY_braille_dots_124578: number;
        const KEY_braille_dots_12458: number;
        const KEY_braille_dots_1246: number;
        const KEY_braille_dots_12467: number;
        const KEY_braille_dots_124678: number;
        const KEY_braille_dots_12468: number;
        const KEY_braille_dots_1247: number;
        const KEY_braille_dots_12478: number;
        const KEY_braille_dots_1248: number;
        const KEY_braille_dots_125: number;
        const KEY_braille_dots_1256: number;
        const KEY_braille_dots_12567: number;
        const KEY_braille_dots_125678: number;
        const KEY_braille_dots_12568: number;
        const KEY_braille_dots_1257: number;
        const KEY_braille_dots_12578: number;
        const KEY_braille_dots_1258: number;
        const KEY_braille_dots_126: number;
        const KEY_braille_dots_1267: number;
        const KEY_braille_dots_12678: number;
        const KEY_braille_dots_1268: number;
        const KEY_braille_dots_127: number;
        const KEY_braille_dots_1278: number;
        const KEY_braille_dots_128: number;
        const KEY_braille_dots_13: number;
        const KEY_braille_dots_134: number;
        const KEY_braille_dots_1345: number;
        const KEY_braille_dots_13456: number;
        const KEY_braille_dots_134567: number;
        const KEY_braille_dots_1345678: number;
        const KEY_braille_dots_134568: number;
        const KEY_braille_dots_13457: number;
        const KEY_braille_dots_134578: number;
        const KEY_braille_dots_13458: number;
        const KEY_braille_dots_1346: number;
        const KEY_braille_dots_13467: number;
        const KEY_braille_dots_134678: number;
        const KEY_braille_dots_13468: number;
        const KEY_braille_dots_1347: number;
        const KEY_braille_dots_13478: number;
        const KEY_braille_dots_1348: number;
        const KEY_braille_dots_135: number;
        const KEY_braille_dots_1356: number;
        const KEY_braille_dots_13567: number;
        const KEY_braille_dots_135678: number;
        const KEY_braille_dots_13568: number;
        const KEY_braille_dots_1357: number;
        const KEY_braille_dots_13578: number;
        const KEY_braille_dots_1358: number;
        const KEY_braille_dots_136: number;
        const KEY_braille_dots_1367: number;
        const KEY_braille_dots_13678: number;
        const KEY_braille_dots_1368: number;
        const KEY_braille_dots_137: number;
        const KEY_braille_dots_1378: number;
        const KEY_braille_dots_138: number;
        const KEY_braille_dots_14: number;
        const KEY_braille_dots_145: number;
        const KEY_braille_dots_1456: number;
        const KEY_braille_dots_14567: number;
        const KEY_braille_dots_145678: number;
        const KEY_braille_dots_14568: number;
        const KEY_braille_dots_1457: number;
        const KEY_braille_dots_14578: number;
        const KEY_braille_dots_1458: number;
        const KEY_braille_dots_146: number;
        const KEY_braille_dots_1467: number;
        const KEY_braille_dots_14678: number;
        const KEY_braille_dots_1468: number;
        const KEY_braille_dots_147: number;
        const KEY_braille_dots_1478: number;
        const KEY_braille_dots_148: number;
        const KEY_braille_dots_15: number;
        const KEY_braille_dots_156: number;
        const KEY_braille_dots_1567: number;
        const KEY_braille_dots_15678: number;
        const KEY_braille_dots_1568: number;
        const KEY_braille_dots_157: number;
        const KEY_braille_dots_1578: number;
        const KEY_braille_dots_158: number;
        const KEY_braille_dots_16: number;
        const KEY_braille_dots_167: number;
        const KEY_braille_dots_1678: number;
        const KEY_braille_dots_168: number;
        const KEY_braille_dots_17: number;
        const KEY_braille_dots_178: number;
        const KEY_braille_dots_18: number;
        const KEY_braille_dots_2: number;
        const KEY_braille_dots_23: number;
        const KEY_braille_dots_234: number;
        const KEY_braille_dots_2345: number;
        const KEY_braille_dots_23456: number;
        const KEY_braille_dots_234567: number;
        const KEY_braille_dots_2345678: number;
        const KEY_braille_dots_234568: number;
        const KEY_braille_dots_23457: number;
        const KEY_braille_dots_234578: number;
        const KEY_braille_dots_23458: number;
        const KEY_braille_dots_2346: number;
        const KEY_braille_dots_23467: number;
        const KEY_braille_dots_234678: number;
        const KEY_braille_dots_23468: number;
        const KEY_braille_dots_2347: number;
        const KEY_braille_dots_23478: number;
        const KEY_braille_dots_2348: number;
        const KEY_braille_dots_235: number;
        const KEY_braille_dots_2356: number;
        const KEY_braille_dots_23567: number;
        const KEY_braille_dots_235678: number;
        const KEY_braille_dots_23568: number;
        const KEY_braille_dots_2357: number;
        const KEY_braille_dots_23578: number;
        const KEY_braille_dots_2358: number;
        const KEY_braille_dots_236: number;
        const KEY_braille_dots_2367: number;
        const KEY_braille_dots_23678: number;
        const KEY_braille_dots_2368: number;
        const KEY_braille_dots_237: number;
        const KEY_braille_dots_2378: number;
        const KEY_braille_dots_238: number;
        const KEY_braille_dots_24: number;
        const KEY_braille_dots_245: number;
        const KEY_braille_dots_2456: number;
        const KEY_braille_dots_24567: number;
        const KEY_braille_dots_245678: number;
        const KEY_braille_dots_24568: number;
        const KEY_braille_dots_2457: number;
        const KEY_braille_dots_24578: number;
        const KEY_braille_dots_2458: number;
        const KEY_braille_dots_246: number;
        const KEY_braille_dots_2467: number;
        const KEY_braille_dots_24678: number;
        const KEY_braille_dots_2468: number;
        const KEY_braille_dots_247: number;
        const KEY_braille_dots_2478: number;
        const KEY_braille_dots_248: number;
        const KEY_braille_dots_25: number;
        const KEY_braille_dots_256: number;
        const KEY_braille_dots_2567: number;
        const KEY_braille_dots_25678: number;
        const KEY_braille_dots_2568: number;
        const KEY_braille_dots_257: number;
        const KEY_braille_dots_2578: number;
        const KEY_braille_dots_258: number;
        const KEY_braille_dots_26: number;
        const KEY_braille_dots_267: number;
        const KEY_braille_dots_2678: number;
        const KEY_braille_dots_268: number;
        const KEY_braille_dots_27: number;
        const KEY_braille_dots_278: number;
        const KEY_braille_dots_28: number;
        const KEY_braille_dots_3: number;
        const KEY_braille_dots_34: number;
        const KEY_braille_dots_345: number;
        const KEY_braille_dots_3456: number;
        const KEY_braille_dots_34567: number;
        const KEY_braille_dots_345678: number;
        const KEY_braille_dots_34568: number;
        const KEY_braille_dots_3457: number;
        const KEY_braille_dots_34578: number;
        const KEY_braille_dots_3458: number;
        const KEY_braille_dots_346: number;
        const KEY_braille_dots_3467: number;
        const KEY_braille_dots_34678: number;
        const KEY_braille_dots_3468: number;
        const KEY_braille_dots_347: number;
        const KEY_braille_dots_3478: number;
        const KEY_braille_dots_348: number;
        const KEY_braille_dots_35: number;
        const KEY_braille_dots_356: number;
        const KEY_braille_dots_3567: number;
        const KEY_braille_dots_35678: number;
        const KEY_braille_dots_3568: number;
        const KEY_braille_dots_357: number;
        const KEY_braille_dots_3578: number;
        const KEY_braille_dots_358: number;
        const KEY_braille_dots_36: number;
        const KEY_braille_dots_367: number;
        const KEY_braille_dots_3678: number;
        const KEY_braille_dots_368: number;
        const KEY_braille_dots_37: number;
        const KEY_braille_dots_378: number;
        const KEY_braille_dots_38: number;
        const KEY_braille_dots_4: number;
        const KEY_braille_dots_45: number;
        const KEY_braille_dots_456: number;
        const KEY_braille_dots_4567: number;
        const KEY_braille_dots_45678: number;
        const KEY_braille_dots_4568: number;
        const KEY_braille_dots_457: number;
        const KEY_braille_dots_4578: number;
        const KEY_braille_dots_458: number;
        const KEY_braille_dots_46: number;
        const KEY_braille_dots_467: number;
        const KEY_braille_dots_4678: number;
        const KEY_braille_dots_468: number;
        const KEY_braille_dots_47: number;
        const KEY_braille_dots_478: number;
        const KEY_braille_dots_48: number;
        const KEY_braille_dots_5: number;
        const KEY_braille_dots_56: number;
        const KEY_braille_dots_567: number;
        const KEY_braille_dots_5678: number;
        const KEY_braille_dots_568: number;
        const KEY_braille_dots_57: number;
        const KEY_braille_dots_578: number;
        const KEY_braille_dots_58: number;
        const KEY_braille_dots_6: number;
        const KEY_braille_dots_67: number;
        const KEY_braille_dots_678: number;
        const KEY_braille_dots_68: number;
        const KEY_braille_dots_7: number;
        const KEY_braille_dots_78: number;
        const KEY_braille_dots_8: number;
        const KEY_breve: number;
        const KEY_brokenbar: number;
        const KEY_c: number;
        const KEY_c_h: number;
        const KEY_cabovedot: number;
        const KEY_cacute: number;
        const KEY_careof: number;
        const KEY_caret: number;
        const KEY_caron: number;
        const KEY_ccaron: number;
        const KEY_ccedilla: number;
        const KEY_ccircumflex: number;
        const KEY_cedilla: number;
        const KEY_cent: number;
        const KEY_ch: number;
        const KEY_checkerboard: number;
        const KEY_checkmark: number;
        const KEY_circle: number;
        const KEY_club: number;
        const KEY_colon: number;
        const KEY_comma: number;
        const KEY_containsas: number;
        const KEY_copyright: number;
        const KEY_cr: number;
        const KEY_crossinglines: number;
        const KEY_cuberoot: number;
        const KEY_currency: number;
        const KEY_cursor: number;
        const KEY_d: number;
        const KEY_dabovedot: number;
        const KEY_dagger: number;
        const KEY_dcaron: number;
        const KEY_dead_A: number;
        const KEY_dead_E: number;
        const KEY_dead_I: number;
        const KEY_dead_O: number;
        const KEY_dead_U: number;
        const KEY_dead_a: number;
        const KEY_dead_abovecomma: number;
        const KEY_dead_abovedot: number;
        const KEY_dead_abovereversedcomma: number;
        const KEY_dead_abovering: number;
        const KEY_dead_aboveverticalline: number;
        const KEY_dead_acute: number;
        const KEY_dead_belowbreve: number;
        const KEY_dead_belowcircumflex: number;
        const KEY_dead_belowcomma: number;
        const KEY_dead_belowdiaeresis: number;
        const KEY_dead_belowdot: number;
        const KEY_dead_belowmacron: number;
        const KEY_dead_belowring: number;
        const KEY_dead_belowtilde: number;
        const KEY_dead_belowverticalline: number;
        const KEY_dead_breve: number;
        const KEY_dead_capital_schwa: number;
        const KEY_dead_caron: number;
        const KEY_dead_cedilla: number;
        const KEY_dead_circumflex: number;
        const KEY_dead_currency: number;
        const KEY_dead_dasia: number;
        const KEY_dead_diaeresis: number;
        const KEY_dead_doubleacute: number;
        const KEY_dead_doublegrave: number;
        const KEY_dead_e: number;
        const KEY_dead_grave: number;
        const KEY_dead_greek: number;
        const KEY_dead_hook: number;
        const KEY_dead_horn: number;
        const KEY_dead_i: number;
        const KEY_dead_invertedbreve: number;
        const KEY_dead_iota: number;
        const KEY_dead_longsolidusoverlay: number;
        const KEY_dead_lowline: number;
        const KEY_dead_macron: number;
        const KEY_dead_o: number;
        const KEY_dead_ogonek: number;
        const KEY_dead_perispomeni: number;
        const KEY_dead_psili: number;
        const KEY_dead_semivoiced_sound: number;
        const KEY_dead_small_schwa: number;
        const KEY_dead_stroke: number;
        const KEY_dead_tilde: number;
        const KEY_dead_u: number;
        const KEY_dead_voiced_sound: number;
        const KEY_decimalpoint: number;
        const KEY_degree: number;
        const KEY_diaeresis: number;
        const KEY_diamond: number;
        const KEY_digitspace: number;
        const KEY_dintegral: number;
        const KEY_division: number;
        const KEY_dollar: number;
        const KEY_doubbaselinedot: number;
        const KEY_doubleacute: number;
        const KEY_doubledagger: number;
        const KEY_doublelowquotemark: number;
        const KEY_downarrow: number;
        const KEY_downcaret: number;
        const KEY_downshoe: number;
        const KEY_downstile: number;
        const KEY_downtack: number;
        const KEY_dstroke: number;
        const KEY_e: number;
        const KEY_eabovedot: number;
        const KEY_eacute: number;
        const KEY_ebelowdot: number;
        const KEY_ecaron: number;
        const KEY_ecircumflex: number;
        const KEY_ecircumflexacute: number;
        const KEY_ecircumflexbelowdot: number;
        const KEY_ecircumflexgrave: number;
        const KEY_ecircumflexhook: number;
        const KEY_ecircumflextilde: number;
        const KEY_ediaeresis: number;
        const KEY_egrave: number;
        const KEY_ehook: number;
        const KEY_eightsubscript: number;
        const KEY_eightsuperior: number;
        const KEY_elementof: number;
        const KEY_ellipsis: number;
        const KEY_em3space: number;
        const KEY_em4space: number;
        const KEY_emacron: number;
        const KEY_emdash: number;
        const KEY_emfilledcircle: number;
        const KEY_emfilledrect: number;
        const KEY_emopencircle: number;
        const KEY_emopenrectangle: number;
        const KEY_emptyset: number;
        const KEY_emspace: number;
        const KEY_endash: number;
        const KEY_enfilledcircbullet: number;
        const KEY_enfilledsqbullet: number;
        const KEY_eng: number;
        const KEY_enopencircbullet: number;
        const KEY_enopensquarebullet: number;
        const KEY_enspace: number;
        const KEY_eogonek: number;
        const KEY_equal: number;
        const KEY_eth: number;
        const KEY_etilde: number;
        const KEY_exclam: number;
        const KEY_exclamdown: number;
        const KEY_ezh: number;
        const KEY_f: number;
        const KEY_fabovedot: number;
        const KEY_femalesymbol: number;
        const KEY_ff: number;
        const KEY_figdash: number;
        const KEY_filledlefttribullet: number;
        const KEY_filledrectbullet: number;
        const KEY_filledrighttribullet: number;
        const KEY_filledtribulletdown: number;
        const KEY_filledtribulletup: number;
        const KEY_fiveeighths: number;
        const KEY_fivesixths: number;
        const KEY_fivesubscript: number;
        const KEY_fivesuperior: number;
        const KEY_fourfifths: number;
        const KEY_foursubscript: number;
        const KEY_foursuperior: number;
        const KEY_fourthroot: number;
        const KEY_function: number;
        const KEY_g: number;
        const KEY_gabovedot: number;
        const KEY_gbreve: number;
        const KEY_gcaron: number;
        const KEY_gcedilla: number;
        const KEY_gcircumflex: number;
        const KEY_grave: number;
        const KEY_greater: number;
        const KEY_greaterthanequal: number;
        const KEY_guillemotleft: number;
        const KEY_guillemotright: number;
        const KEY_h: number;
        const KEY_hairspace: number;
        const KEY_hcircumflex: number;
        const KEY_heart: number;
        const KEY_hebrew_aleph: number;
        const KEY_hebrew_ayin: number;
        const KEY_hebrew_bet: number;
        const KEY_hebrew_beth: number;
        const KEY_hebrew_chet: number;
        const KEY_hebrew_dalet: number;
        const KEY_hebrew_daleth: number;
        const KEY_hebrew_doublelowline: number;
        const KEY_hebrew_finalkaph: number;
        const KEY_hebrew_finalmem: number;
        const KEY_hebrew_finalnun: number;
        const KEY_hebrew_finalpe: number;
        const KEY_hebrew_finalzade: number;
        const KEY_hebrew_finalzadi: number;
        const KEY_hebrew_gimel: number;
        const KEY_hebrew_gimmel: number;
        const KEY_hebrew_he: number;
        const KEY_hebrew_het: number;
        const KEY_hebrew_kaph: number;
        const KEY_hebrew_kuf: number;
        const KEY_hebrew_lamed: number;
        const KEY_hebrew_mem: number;
        const KEY_hebrew_nun: number;
        const KEY_hebrew_pe: number;
        const KEY_hebrew_qoph: number;
        const KEY_hebrew_resh: number;
        const KEY_hebrew_samech: number;
        const KEY_hebrew_samekh: number;
        const KEY_hebrew_shin: number;
        const KEY_hebrew_taf: number;
        const KEY_hebrew_taw: number;
        const KEY_hebrew_tet: number;
        const KEY_hebrew_teth: number;
        const KEY_hebrew_waw: number;
        const KEY_hebrew_yod: number;
        const KEY_hebrew_zade: number;
        const KEY_hebrew_zadi: number;
        const KEY_hebrew_zain: number;
        const KEY_hebrew_zayin: number;
        const KEY_hexagram: number;
        const KEY_horizconnector: number;
        const KEY_horizlinescan1: number;
        const KEY_horizlinescan3: number;
        const KEY_horizlinescan5: number;
        const KEY_horizlinescan7: number;
        const KEY_horizlinescan9: number;
        const KEY_hstroke: number;
        const KEY_ht: number;
        const KEY_hyphen: number;
        const KEY_i: number;
        const KEY_iTouch: number;
        const KEY_iacute: number;
        const KEY_ibelowdot: number;
        const KEY_ibreve: number;
        const KEY_icircumflex: number;
        const KEY_identical: number;
        const KEY_idiaeresis: number;
        const KEY_idotless: number;
        const KEY_ifonlyif: number;
        const KEY_igrave: number;
        const KEY_ihook: number;
        const KEY_imacron: number;
        const KEY_implies: number;
        const KEY_includedin: number;
        const KEY_includes: number;
        const KEY_infinity: number;
        const KEY_integral: number;
        const KEY_intersection: number;
        const KEY_iogonek: number;
        const KEY_itilde: number;
        const KEY_j: number;
        const KEY_jcircumflex: number;
        const KEY_jot: number;
        const KEY_k: number;
        const KEY_kana_A: number;
        const KEY_kana_CHI: number;
        const KEY_kana_E: number;
        const KEY_kana_FU: number;
        const KEY_kana_HA: number;
        const KEY_kana_HE: number;
        const KEY_kana_HI: number;
        const KEY_kana_HO: number;
        const KEY_kana_HU: number;
        const KEY_kana_I: number;
        const KEY_kana_KA: number;
        const KEY_kana_KE: number;
        const KEY_kana_KI: number;
        const KEY_kana_KO: number;
        const KEY_kana_KU: number;
        const KEY_kana_MA: number;
        const KEY_kana_ME: number;
        const KEY_kana_MI: number;
        const KEY_kana_MO: number;
        const KEY_kana_MU: number;
        const KEY_kana_N: number;
        const KEY_kana_NA: number;
        const KEY_kana_NE: number;
        const KEY_kana_NI: number;
        const KEY_kana_NO: number;
        const KEY_kana_NU: number;
        const KEY_kana_O: number;
        const KEY_kana_RA: number;
        const KEY_kana_RE: number;
        const KEY_kana_RI: number;
        const KEY_kana_RO: number;
        const KEY_kana_RU: number;
        const KEY_kana_SA: number;
        const KEY_kana_SE: number;
        const KEY_kana_SHI: number;
        const KEY_kana_SO: number;
        const KEY_kana_SU: number;
        const KEY_kana_TA: number;
        const KEY_kana_TE: number;
        const KEY_kana_TI: number;
        const KEY_kana_TO: number;
        const KEY_kana_TSU: number;
        const KEY_kana_TU: number;
        const KEY_kana_U: number;
        const KEY_kana_WA: number;
        const KEY_kana_WO: number;
        const KEY_kana_YA: number;
        const KEY_kana_YO: number;
        const KEY_kana_YU: number;
        const KEY_kana_a: number;
        const KEY_kana_closingbracket: number;
        const KEY_kana_comma: number;
        const KEY_kana_conjunctive: number;
        const KEY_kana_e: number;
        const KEY_kana_fullstop: number;
        const KEY_kana_i: number;
        const KEY_kana_middledot: number;
        const KEY_kana_o: number;
        const KEY_kana_openingbracket: number;
        const KEY_kana_switch: number;
        const KEY_kana_tsu: number;
        const KEY_kana_tu: number;
        const KEY_kana_u: number;
        const KEY_kana_ya: number;
        const KEY_kana_yo: number;
        const KEY_kana_yu: number;
        const KEY_kappa: number;
        const KEY_kcedilla: number;
        const KEY_kra: number;
        const KEY_l: number;
        const KEY_lacute: number;
        const KEY_latincross: number;
        const KEY_lbelowdot: number;
        const KEY_lcaron: number;
        const KEY_lcedilla: number;
        const KEY_leftanglebracket: number;
        const KEY_leftarrow: number;
        const KEY_leftcaret: number;
        const KEY_leftdoublequotemark: number;
        const KEY_leftmiddlecurlybrace: number;
        const KEY_leftopentriangle: number;
        const KEY_leftpointer: number;
        const KEY_leftradical: number;
        const KEY_leftshoe: number;
        const KEY_leftsinglequotemark: number;
        const KEY_leftt: number;
        const KEY_lefttack: number;
        const KEY_less: number;
        const KEY_lessthanequal: number;
        const KEY_lf: number;
        const KEY_logicaland: number;
        const KEY_logicalor: number;
        const KEY_lowleftcorner: number;
        const KEY_lowrightcorner: number;
        const KEY_lstroke: number;
        const KEY_m: number;
        const KEY_mabovedot: number;
        const KEY_macron: number;
        const KEY_malesymbol: number;
        const KEY_maltesecross: number;
        const KEY_marker: number;
        const KEY_masculine: number;
        const KEY_minus: number;
        const KEY_minutes: number;
        const KEY_mu: number;
        const KEY_multiply: number;
        const KEY_musicalflat: number;
        const KEY_musicalsharp: number;
        const KEY_n: number;
        const KEY_nabla: number;
        const KEY_nacute: number;
        const KEY_ncaron: number;
        const KEY_ncedilla: number;
        const KEY_ninesubscript: number;
        const KEY_ninesuperior: number;
        const KEY_nl: number;
        const KEY_nobreakspace: number;
        const KEY_notapproxeq: number;
        const KEY_notelementof: number;
        const KEY_notequal: number;
        const KEY_notidentical: number;
        const KEY_notsign: number;
        const KEY_ntilde: number;
        const KEY_numbersign: number;
        const KEY_numerosign: number;
        const KEY_o: number;
        const KEY_oacute: number;
        const KEY_obarred: number;
        const KEY_obelowdot: number;
        const KEY_ocaron: number;
        const KEY_ocircumflex: number;
        const KEY_ocircumflexacute: number;
        const KEY_ocircumflexbelowdot: number;
        const KEY_ocircumflexgrave: number;
        const KEY_ocircumflexhook: number;
        const KEY_ocircumflextilde: number;
        const KEY_odiaeresis: number;
        const KEY_odoubleacute: number;
        const KEY_oe: number;
        const KEY_ogonek: number;
        const KEY_ograve: number;
        const KEY_ohook: number;
        const KEY_ohorn: number;
        const KEY_ohornacute: number;
        const KEY_ohornbelowdot: number;
        const KEY_ohorngrave: number;
        const KEY_ohornhook: number;
        const KEY_ohorntilde: number;
        const KEY_omacron: number;
        const KEY_oneeighth: number;
        const KEY_onefifth: number;
        const KEY_onehalf: number;
        const KEY_onequarter: number;
        const KEY_onesixth: number;
        const KEY_onesubscript: number;
        const KEY_onesuperior: number;
        const KEY_onethird: number;
        const KEY_ooblique: number;
        const KEY_openrectbullet: number;
        const KEY_openstar: number;
        const KEY_opentribulletdown: number;
        const KEY_opentribulletup: number;
        const KEY_ordfeminine: number;
        const KEY_oslash: number;
        const KEY_otilde: number;
        const KEY_overbar: number;
        const KEY_overline: number;
        const KEY_p: number;
        const KEY_pabovedot: number;
        const KEY_paragraph: number;
        const KEY_parenleft: number;
        const KEY_parenright: number;
        const KEY_partdifferential: number;
        const KEY_partialderivative: number;
        const KEY_percent: number;
        const KEY_period: number;
        const KEY_periodcentered: number;
        const KEY_permille: number;
        const KEY_phonographcopyright: number;
        const KEY_plus: number;
        const KEY_plusminus: number;
        const KEY_prescription: number;
        const KEY_prolongedsound: number;
        const KEY_punctspace: number;
        const KEY_q: number;
        const KEY_quad: number;
        const KEY_question: number;
        const KEY_questiondown: number;
        const KEY_quotedbl: number;
        const KEY_quoteleft: number;
        const KEY_quoteright: number;
        const KEY_r: number;
        const KEY_racute: number;
        const KEY_radical: number;
        const KEY_rcaron: number;
        const KEY_rcedilla: number;
        const KEY_registered: number;
        const KEY_rightanglebracket: number;
        const KEY_rightarrow: number;
        const KEY_rightcaret: number;
        const KEY_rightdoublequotemark: number;
        const KEY_rightmiddlecurlybrace: number;
        const KEY_rightmiddlesummation: number;
        const KEY_rightopentriangle: number;
        const KEY_rightpointer: number;
        const KEY_rightshoe: number;
        const KEY_rightsinglequotemark: number;
        const KEY_rightt: number;
        const KEY_righttack: number;
        const KEY_s: number;
        const KEY_sabovedot: number;
        const KEY_sacute: number;
        const KEY_scaron: number;
        const KEY_scedilla: number;
        const KEY_schwa: number;
        const KEY_scircumflex: number;
        const KEY_script_switch: number;
        const KEY_seconds: number;
        const KEY_section: number;
        const KEY_semicolon: number;
        const KEY_semivoicedsound: number;
        const KEY_seveneighths: number;
        const KEY_sevensubscript: number;
        const KEY_sevensuperior: number;
        const KEY_signaturemark: number;
        const KEY_signifblank: number;
        const KEY_similarequal: number;
        const KEY_singlelowquotemark: number;
        const KEY_sixsubscript: number;
        const KEY_sixsuperior: number;
        const KEY_slash: number;
        const KEY_soliddiamond: number;
        const KEY_space: number;
        const KEY_squareroot: number;
        const KEY_ssharp: number;
        const KEY_sterling: number;
        const KEY_stricteq: number;
        const KEY_t: number;
        const KEY_tabovedot: number;
        const KEY_tcaron: number;
        const KEY_tcedilla: number;
        const KEY_telephone: number;
        const KEY_telephonerecorder: number;
        const KEY_therefore: number;
        const KEY_thinspace: number;
        const KEY_thorn: number;
        const KEY_threeeighths: number;
        const KEY_threefifths: number;
        const KEY_threequarters: number;
        const KEY_threesubscript: number;
        const KEY_threesuperior: number;
        const KEY_tintegral: number;
        const KEY_topintegral: number;
        const KEY_topleftparens: number;
        const KEY_topleftradical: number;
        const KEY_topleftsqbracket: number;
        const KEY_topleftsummation: number;
        const KEY_toprightparens: number;
        const KEY_toprightsqbracket: number;
        const KEY_toprightsummation: number;
        const KEY_topt: number;
        const KEY_topvertsummationconnector: number;
        const KEY_trademark: number;
        const KEY_trademarkincircle: number;
        const KEY_tslash: number;
        const KEY_twofifths: number;
        const KEY_twosubscript: number;
        const KEY_twosuperior: number;
        const KEY_twothirds: number;
        const KEY_u: number;
        const KEY_uacute: number;
        const KEY_ubelowdot: number;
        const KEY_ubreve: number;
        const KEY_ucircumflex: number;
        const KEY_udiaeresis: number;
        const KEY_udoubleacute: number;
        const KEY_ugrave: number;
        const KEY_uhook: number;
        const KEY_uhorn: number;
        const KEY_uhornacute: number;
        const KEY_uhornbelowdot: number;
        const KEY_uhorngrave: number;
        const KEY_uhornhook: number;
        const KEY_uhorntilde: number;
        const KEY_umacron: number;
        const KEY_underbar: number;
        const KEY_underscore: number;
        const KEY_union: number;
        const KEY_uogonek: number;
        const KEY_uparrow: number;
        const KEY_upcaret: number;
        const KEY_upleftcorner: number;
        const KEY_uprightcorner: number;
        const KEY_upshoe: number;
        const KEY_upstile: number;
        const KEY_uptack: number;
        const KEY_uring: number;
        const KEY_utilde: number;
        const KEY_v: number;
        const KEY_variation: number;
        const KEY_vertbar: number;
        const KEY_vertconnector: number;
        const KEY_voicedsound: number;
        const KEY_vt: number;
        const KEY_w: number;
        const KEY_wacute: number;
        const KEY_wcircumflex: number;
        const KEY_wdiaeresis: number;
        const KEY_wgrave: number;
        const KEY_x: number;
        const KEY_xabovedot: number;
        const KEY_y: number;
        const KEY_yacute: number;
        const KEY_ybelowdot: number;
        const KEY_ycircumflex: number;
        const KEY_ydiaeresis: number;
        const KEY_yen: number;
        const KEY_ygrave: number;
        const KEY_yhook: number;
        const KEY_ytilde: number;
        const KEY_z: number;
        const KEY_zabovedot: number;
        const KEY_zacute: number;
        const KEY_zcaron: number;
        const KEY_zerosubscript: number;
        const KEY_zerosuperior: number;
        const KEY_zstroke: number;
        const MAJOR_VERSION: number;
        const MAX_TIMECOORD_AXES: number;
        const MICRO_VERSION: number;
        const MINOR_VERSION: number;
        /**
         * A special value, indicating that the background
         * for a window should be inherited from the parent window.
         */
        const PARENT_RELATIVE: number;
        /**
         * This is the priority that the idle handler processing window updates
         * is given in the
         * [GLib Main Loop][glib-The-Main-Event-Loop].
         */
        const PRIORITY_REDRAW: number;
        /**
         * Appends gdk option entries to the passed in option group. This is
         * not public API and must not be used by applications.
         * @param group An option group.
         */
        function add_option_entries_libgtk_only(group: GLib.OptionGroup): void;
        /**
         * Finds or creates an atom corresponding to a given string.
         * @param atom_name a string.
         * @param only_if_exists if %TRUE, GDK is allowed to not create a new atom, but   just return %GDK_NONE if the requested atom doesn’t already   exists. Currently, the flag is ignored, since checking the   existance of an atom is as expensive as creating it.
         * @returns the atom corresponding to @atom_name.
         */
        function atom_intern(atom_name: string, only_if_exists: boolean): Atom;
        /**
         * Finds or creates an atom corresponding to a given string.
         *
         * Note that this function is identical to gdk_atom_intern() except
         * that if a new #GdkAtom is created the string itself is used rather
         * than a copy. This saves memory, but can only be used if the string
         * will always exist. It can be used with statically
         * allocated strings in the main program, but not with statically
         * allocated memory in dynamically loaded modules, if you expect to
         * ever unload the module again (e.g. do not use this function in
         * GTK+ theme engines).
         * @param atom_name a static string
         * @returns the atom corresponding to @atom_name
         */
        function atom_intern_static_string(atom_name: string): Atom;
        /**
         * Emits a short beep on the default display.
         */
        function beep(): void;
        /**
         * Creates a Cairo context for drawing to `window`.
         *
         * Note that calling cairo_reset_clip() on the resulting #cairo_t will
         * produce undefined results, so avoid it at all costs.
         *
         * Typically, this function is used to draw on a #GdkWindow out of the paint
         * cycle of the toolkit; this should be avoided, as it breaks various assumptions
         * and optimizations.
         *
         * If you are drawing on a native #GdkWindow in response to a %GDK_EXPOSE event
         * you should use gdk_window_begin_draw_frame() and gdk_drawing_context_get_cairo_context()
         * instead. GTK will automatically do this for you when drawing a widget.
         * @param window a #GdkWindow
         * @returns A newly created Cairo context. Free with  cairo_destroy() when you are done drawing.
         */
        function cairo_create(window: Window): cairo.Context;
        /**
         * This is the main way to draw GL content in GTK+. It takes a render buffer ID
         * (`source_type` == #GL_RENDERBUFFER) or a texture id (`source_type` == #GL_TEXTURE)
         * and draws it onto `cr` with an OVER operation, respecting the current clip.
         * The top left corner of the rectangle specified by `x,` `y,` `width` and `height`
         * will be drawn at the current (0,0) position of the cairo_t.
         *
         * This will work for *all* cairo_t, as long as `window` is realized, but the
         * fallback implementation that reads back the pixels from the buffer may be
         * used in the general case. In the case of direct drawing to a window with
         * no special effects applied to `cr` it will however use a more efficient
         * approach.
         *
         * For #GL_RENDERBUFFER the code will always fall back to software for buffers
         * with alpha components, so make sure you use #GL_TEXTURE if using alpha.
         *
         * Calling this may change the current GL context.
         * @param cr a cairo context
         * @param window The window we're rendering for (not necessarily into)
         * @param source The GL ID of the source buffer
         * @param source_type The type of the @source
         * @param buffer_scale The scale-factor that the @source buffer is allocated for
         * @param x The source x position in @source to start copying from in GL coordinates
         * @param y The source y position in @source to start copying from in GL coordinates
         * @param width The width of the region to draw
         * @param height The height of the region to draw
         */
        function cairo_draw_from_gl(
            cr: cairo.Context,
            window: Window,
            source: number,
            source_type: number,
            buffer_scale: number,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * This is a convenience function around cairo_clip_extents().
         * It rounds the clip extents to integer coordinates and returns
         * a boolean indicating if a clip area exists.
         * @param cr a cairo context
         * @returns %TRUE if a clip rectangle exists, %FALSE if all of @cr is     clipped and all drawing can be skipped
         */
        function cairo_get_clip_rectangle(cr: cairo.Context): [boolean, Rectangle | null];
        /**
         * Retrieves the #GdkDrawingContext that created the Cairo
         * context `cr`.
         * @param cr a Cairo context
         * @returns a #GdkDrawingContext, if any is set
         */
        function cairo_get_drawing_context(cr: cairo.Context): DrawingContext | null;
        /**
         * Adds the given rectangle to the current path of `cr`.
         * @param cr a cairo context
         * @param rectangle a #GdkRectangle
         */
        function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void;
        /**
         * Adds the given region to the current path of `cr`.
         * @param cr a cairo context
         * @param region a #cairo_region_t
         */
        function cairo_region(cr: cairo.Context, region: cairo.Region): void;
        /**
         * Creates region that describes covers the area where the given
         * `surface` is more than 50% opaque.
         *
         * This function takes into account device offsets that might be
         * set with cairo_surface_set_device_offset().
         * @param surface a cairo surface
         * @returns A #cairo_region_t; must be freed with cairo_region_destroy()
         */
        function cairo_region_create_from_surface(surface: cairo.Surface): cairo.Region;
        /**
         * Sets the specified #GdkColor as the source color of `cr`.
         * @param cr a cairo context
         * @param color a #GdkColor
         */
        function cairo_set_source_color(cr: cairo.Context, color: Color): void;
        /**
         * Sets the given pixbuf as the source pattern for `cr`.
         *
         * The pattern has an extend mode of %CAIRO_EXTEND_NONE and is aligned
         * so that the origin of `pixbuf` is `pixbuf_x,` `pixbuf_y`.
         * @param cr a cairo context
         * @param pixbuf a #GdkPixbuf
         * @param pixbuf_x X coordinate of location to place upper left corner of @pixbuf
         * @param pixbuf_y Y coordinate of location to place upper left corner of @pixbuf
         */
        function cairo_set_source_pixbuf(
            cr: cairo.Context,
            pixbuf: GdkPixbuf.Pixbuf,
            pixbuf_x: number,
            pixbuf_y: number,
        ): void;
        /**
         * Sets the specified #GdkRGBA as the source color of `cr`.
         * @param cr a cairo context
         * @param rgba a #GdkRGBA
         */
        function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA): void;
        /**
         * Sets the given window as the source pattern for `cr`.
         *
         * The pattern has an extend mode of %CAIRO_EXTEND_NONE and is aligned
         * so that the origin of `window` is `x,` `y`. The window contains all its
         * subwindows when rendering.
         *
         * Note that the contents of `window` are undefined outside of the
         * visible part of `window,` so use this function with care.
         * @param cr a cairo context
         * @param window a #GdkWindow
         * @param x X coordinate of location to place upper left corner of @window
         * @param y Y coordinate of location to place upper left corner of @window
         */
        function cairo_set_source_window(cr: cairo.Context, window: Window, x: number, y: number): void;
        /**
         * Creates an image surface with the same contents as
         * the pixbuf.
         * @param pixbuf a #GdkPixbuf
         * @param scale the scale of the new surface, or 0 to use same as @window
         * @param for_window The window this will be drawn to, or %NULL
         * @returns a new cairo surface, must be freed with cairo_surface_destroy()
         */
        function cairo_surface_create_from_pixbuf(
            pixbuf: GdkPixbuf.Pixbuf,
            scale: number,
            for_window?: Window | null,
        ): cairo.Surface;
        /**
         * Parses a textual specification of a color and fill in the
         * `red,` `green,` and `blue` fields of a #GdkColor.
         *
         * The string can either one of a large set of standard names
         * (taken from the X11 `rgb.txt` file), or it can be a hexadecimal
         * value in the form “\#rgb” “\#rrggbb”, “\#rrrgggbbb” or
         * “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits of
         * the red, green, and blue components of the color, respectively.
         * (White in the four forms is “\#fff”, “\#ffffff”, “\#fffffffff”
         * and “\#ffffffffffff”).
         * @param spec the string specifying the color
         * @returns %TRUE if the parsing succeeded
         */
        function color_parse(spec: string): [boolean, Color];
        /**
         * Disables multidevice support in GDK. This call must happen prior
         * to gdk_display_open(), gtk_init(), gtk_init_with_args() or
         * gtk_init_check() in order to take effect.
         *
         * Most common GTK+ applications won’t ever need to call this. Only
         * applications that do mixed GDK/Xlib calls could want to disable
         * multidevice support if such Xlib code deals with input devices in
         * any way and doesn’t observe the presence of XInput 2.
         */
        function disable_multidevice(): void;
        /**
         * Aborts a drag without dropping.
         *
         * This function is called by the drag source.
         *
         * This function does not need to be called in managed drag and drop
         * operations. See gdk_drag_context_manage_dnd() for more information.
         * @param context a #GdkDragContext
         * @param time_ the timestamp for this operation
         */
        function drag_abort(context: DragContext, time_: number): void;
        /**
         * Starts a drag and creates a new drag context for it.
         * This function assumes that the drag is controlled by the
         * client pointer device, use gdk_drag_begin_for_device() to
         * begin a drag with a different device.
         *
         * This function is called by the drag source.
         * @param window the source window for this drag.
         * @param targets the offered targets,     as list of #GdkAtoms
         * @returns a newly created #GdkDragContext
         */
        function drag_begin(window: Window, targets: Atom[]): DragContext;
        /**
         * Starts a drag and creates a new drag context for it.
         *
         * This function is called by the drag source.
         * @param window the source window for this drag
         * @param device the device that controls this drag
         * @param targets the offered targets,     as list of #GdkAtoms
         * @returns a newly created #GdkDragContext
         */
        function drag_begin_for_device(window: Window, device: Device, targets: Atom[]): DragContext;
        /**
         * Starts a drag and creates a new drag context for it.
         *
         * This function is called by the drag source.
         * @param window the source window for this drag
         * @param device the device that controls this drag
         * @param targets the offered targets,     as list of #GdkAtoms
         * @param x_root the x coordinate where the drag nominally started
         * @param y_root the y coordinate where the drag nominally started
         * @returns a newly created #GdkDragContext
         */
        function drag_begin_from_point(
            window: Window,
            device: Device,
            targets: Atom[],
            x_root: number,
            y_root: number,
        ): DragContext;
        /**
         * Drops on the current destination.
         *
         * This function is called by the drag source.
         *
         * This function does not need to be called in managed drag and drop
         * operations. See gdk_drag_context_manage_dnd() for more information.
         * @param context a #GdkDragContext
         * @param time_ the timestamp for this operation
         */
        function drag_drop(context: DragContext, time_: number): void;
        /**
         * Inform GDK if the drop ended successfully. Passing %FALSE
         * for `success` may trigger a drag cancellation animation.
         *
         * This function is called by the drag source, and should
         * be the last call before dropping the reference to the
         * `context`.
         *
         * The #GdkDragContext will only take the first gdk_drag_drop_done()
         * call as effective, if this function is called multiple times,
         * all subsequent calls will be ignored.
         * @param context a #GdkDragContext
         * @param success whether the drag was ultimatively successful
         */
        function drag_drop_done(context: DragContext, success: boolean): void;
        /**
         * Returns whether the dropped data has been successfully
         * transferred. This function is intended to be used while
         * handling a %GDK_DROP_FINISHED event, its return value is
         * meaningless at other times.
         * @param context a #GdkDragContext
         * @returns %TRUE if the drop was successful.
         */
        function drag_drop_succeeded(context: DragContext): boolean;
        /**
         * Finds the destination window and DND protocol to use at the
         * given pointer position.
         *
         * This function is called by the drag source to obtain the
         * `dest_window` and `protocol` parameters for gdk_drag_motion().
         * @param context a #GdkDragContext
         * @param drag_window a window which may be at the pointer position, but     should be ignored, since it is put up by the drag source as an icon
         * @param screen the screen where the destination window is sought
         * @param x_root the x position of the pointer in root coordinates
         * @param y_root the y position of the pointer in root coordinates
         */
        function drag_find_window_for_screen(
            context: DragContext,
            drag_window: Window,
            screen: Screen,
            x_root: number,
            y_root: number,
        ): [Window, DragProtocol];
        /**
         * Returns the selection atom for the current source window.
         * @param context a #GdkDragContext.
         * @returns the selection atom, or %GDK_NONE
         */
        function drag_get_selection(context: DragContext): Atom;
        /**
         * Updates the drag context when the pointer moves or the
         * set of actions changes.
         *
         * This function is called by the drag source.
         *
         * This function does not need to be called in managed drag and drop
         * operations. See gdk_drag_context_manage_dnd() for more information.
         * @param context a #GdkDragContext
         * @param dest_window the new destination window, obtained by     gdk_drag_find_window()
         * @param protocol the DND protocol in use, obtained by gdk_drag_find_window()
         * @param x_root the x position of the pointer in root coordinates
         * @param y_root the y position of the pointer in root coordinates
         * @param suggested_action the suggested action
         * @param possible_actions the possible actions
         * @param time_ the timestamp for this operation
         */
        function drag_motion(
            context: DragContext,
            dest_window: Window,
            protocol: DragProtocol | null,
            x_root: number,
            y_root: number,
            suggested_action: DragAction | null,
            possible_actions: DragAction | null,
            time_: number,
        ): boolean;
        /**
         * Selects one of the actions offered by the drag source.
         *
         * This function is called by the drag destination in response to
         * gdk_drag_motion() called by the drag source.
         * @param context a #GdkDragContext
         * @param action the selected action which will be taken when a drop happens,    or 0 to indicate that a drop will not be accepted
         * @param time_ the timestamp for this operation
         */
        function drag_status(context: DragContext, action: DragAction | null, time_: number): void;
        /**
         * Ends the drag operation after a drop.
         *
         * This function is called by the drag destination.
         * @param context a #GdkDragContext
         * @param success %TRUE if the data was successfully received
         * @param time_ the timestamp for this operation
         */
        function drop_finish(context: DragContext, success: boolean, time_: number): void;
        /**
         * Accepts or rejects a drop.
         *
         * This function is called by the drag destination in response
         * to a drop initiated by the drag source.
         * @param context a #GdkDragContext
         * @param accepted %TRUE if the drop is accepted
         * @param time_ the timestamp for this operation
         */
        function drop_reply(context: DragContext, accepted: boolean, time_: number): void;
        /**
         * Removes an error trap pushed with gdk_error_trap_push().
         * May block until an error has been definitively received
         * or not received from the X server. gdk_error_trap_pop_ignored()
         * is preferred if you don’t need to know whether an error
         * occurred, because it never has to block. If you don't
         * need the return value of gdk_error_trap_pop(), use
         * gdk_error_trap_pop_ignored().
         *
         * Prior to GDK 3.0, this function would not automatically
         * sync for you, so you had to gdk_flush() if your last
         * call to Xlib was not a blocking round trip.
         * @returns X error code or 0 on success
         */
        function error_trap_pop(): number;
        /**
         * Removes an error trap pushed with gdk_error_trap_push(), but
         * without bothering to wait and see whether an error occurred.  If an
         * error arrives later asynchronously that was triggered while the
         * trap was pushed, that error will be ignored.
         */
        function error_trap_pop_ignored(): void;
        /**
         * This function allows X errors to be trapped instead of the normal
         * behavior of exiting the application. It should only be used if it
         * is not possible to avoid the X error in any other way. Errors are
         * ignored on all #GdkDisplay currently known to the
         * #GdkDisplayManager. If you don’t care which error happens and just
         * want to ignore everything, pop with gdk_error_trap_pop_ignored().
         * If you need the error code, use gdk_error_trap_pop() which may have
         * to block and wait for the error to arrive from the X server.
         *
         * This API exists on all platforms but only does anything on X.
         *
         * You can use gdk_x11_display_error_trap_push() to ignore errors
         * on only a single display.
         *
         * ## Trapping an X error
         *
         *
         * ```c
         * gdk_error_trap_push ();
         *
         *  // ... Call the X function which may cause an error here ...
         *
         *
         * if (gdk_error_trap_pop ())
         *  {
         *    // ... Handle the error here ...
         *  }
         * ```
         *
         */
        function error_trap_push(): void;
        /**
         * Checks all open displays for a #GdkEvent to process,to be processed
         * on, fetching events from the windowing system if necessary.
         * See gdk_display_get_event().
         * @returns the next #GdkEvent to be processed, or %NULL if no events are pending. The returned #GdkEvent should be freed with gdk_event_free().
         */
        function event_get(): Event | null;
        /**
         * Sets the function to call to handle all events from GDK.
         *
         * Note that GTK+ uses this to install its own event handler, so it is
         * usually not useful for GTK+ applications. (Although an application
         * can call this function then call gtk_main_do_event() to pass
         * events to GTK+.)
         * @param func the function to call to handle events from GDK.
         */
        function event_handler_set(func: EventFunc): void;
        /**
         * If there is an event waiting in the event queue of some open
         * display, returns a copy of it. See gdk_display_peek_event().
         * @returns a copy of the first #GdkEvent on some event queue, or %NULL if no events are in any queues. The returned #GdkEvent should be freed with gdk_event_free().
         */
        function event_peek(): Event | null;
        /**
         * Request more motion notifies if `event` is a motion notify hint event.
         *
         * This function should be used instead of gdk_window_get_pointer() to
         * request further motion notifies, because it also works for extension
         * events where motion notifies are provided for devices other than the
         * core pointer. Coordinate extraction, processing and requesting more
         * motion events from a %GDK_MOTION_NOTIFY event usually works like this:
         *
         *
         * ```c
         * {
         *   // motion_event handler
         *   x = motion_event->x;
         *   y = motion_event->y;
         *   // handle (x,y) motion
         *   gdk_event_request_motions (motion_event); // handles is_hint events
         * }
         * ```
         *
         * @param event a valid #GdkEvent
         */
        function event_request_motions(event: EventMotion): void;
        /**
         * If both events contain X/Y information, this function will return %TRUE
         * and return in `angle` the relative angle from `event1` to `event2`. The rotation
         * direction for positive angles is from the positive X axis towards the positive
         * Y axis.
         * @param event1 first #GdkEvent
         * @param event2 second #GdkEvent
         * @returns %TRUE if the angle could be calculated.
         */
        function events_get_angle(event1: Event, event2: Event): [boolean, number];
        /**
         * If both events contain X/Y information, the center of both coordinates
         * will be returned in `x` and `y`.
         * @param event1 first #GdkEvent
         * @param event2 second #GdkEvent
         * @returns %TRUE if the center could be calculated.
         */
        function events_get_center(event1: Event, event2: Event): [boolean, number, number];
        /**
         * If both events have X/Y information, the distance between both coordinates
         * (as in a straight line going from `event1` to `event2`) will be returned.
         * @param event1 first #GdkEvent
         * @param event2 second #GdkEvent
         * @returns %TRUE if the distance could be calculated.
         */
        function events_get_distance(event1: Event, event2: Event): [boolean, number];
        /**
         * Checks if any events are ready to be processed for any display.
         * @returns %TRUE if any events are pending.
         */
        function events_pending(): boolean;
        /**
         * Flushes the output buffers of all display connections and waits
         * until all requests have been processed.
         * This is rarely needed by applications.
         */
        function flush(): void;
        /**
         * Obtains the root window (parent all other windows are inside)
         * for the default display and screen.
         * @returns the default root window
         */
        function get_default_root_window(): Window;
        /**
         * Gets the name of the display, which usually comes from the
         * `DISPLAY` environment variable or the
         * `--display` command line option.
         * @returns the name of the display.
         */
        function get_display(): string;
        /**
         * Gets the display name specified in the command line arguments passed
         * to gdk_init() or gdk_parse_args(), if any.
         * @returns the display name, if specified explicitly,   otherwise %NULL this string is owned by GTK+ and must not be   modified or freed.
         */
        function get_display_arg_name(): string | null;
        /**
         * Gets the program class. Unless the program class has explicitly
         * been set with gdk_set_program_class() or with the `--class`
         * commandline option, the default value is the program name (determined
         * with g_get_prgname()) with the first character converted to uppercase.
         * @returns the program class.
         */
        function get_program_class(): string;
        /**
         * Gets whether event debugging output is enabled.
         * @returns %TRUE if event debugging output is enabled.
         */
        function get_show_events(): boolean;
        function gl_error_quark(): GLib.Quark;
        /**
         * Initializes the GDK library and connects to the windowing system.
         * If initialization fails, a warning message is output and the application
         * terminates with a call to `exit(1)`.
         *
         * Any arguments used by GDK are removed from the array and `argc` and `argv`
         * are updated accordingly.
         *
         * GTK+ initializes GDK in gtk_init() and so this function is not usually
         * needed by GTK+ applications.
         * @param argv the array of command line arguments.
         */
        function init(argv: string[]): string[];
        /**
         * Initializes the GDK library and connects to the windowing system,
         * returning %TRUE on success.
         *
         * Any arguments used by GDK are removed from the array and `argc` and `argv`
         * are updated accordingly.
         *
         * GTK+ initializes GDK in gtk_init() and so this function is not usually
         * needed by GTK+ applications.
         * @param argv the array of command line arguments.
         * @returns %TRUE if initialization succeeded.
         */
        function init_check(argv: string[]): [boolean, string[]];
        /**
         * Grabs the keyboard so that all events are passed to this
         * application until the keyboard is ungrabbed with gdk_keyboard_ungrab().
         * This overrides any previous keyboard grab by this client.
         *
         * If you set up anything at the time you take the grab that needs to be cleaned
         * up when the grab ends, you should handle the #GdkEventGrabBroken events that
         * are emitted when the grab ends unvoluntarily.
         * @param window the #GdkWindow which will own the grab (the grab window).
         * @param owner_events if %FALSE then all keyboard events are reported with respect to   @window. If %TRUE then keyboard events for this application are   reported as normal, but keyboard events outside this application   are reported with respect to @window. Both key press and key   release events are always reported, independant of the event mask   set by the application.
         * @param time_ a timestamp from a #GdkEvent, or %GDK_CURRENT_TIME if no timestamp is   available.
         * @returns %GDK_GRAB_SUCCESS if the grab was successful.
         */
        function keyboard_grab(window: Window, owner_events: boolean, time_: number): GrabStatus;
        /**
         * Ungrabs the keyboard on the default display, if it is grabbed by this
         * application.
         * @param time_ a timestamp from a #GdkEvent, or %GDK_CURRENT_TIME if no        timestamp is available.
         */
        function keyboard_ungrab(time_: number): void;
        /**
         * Obtains the upper- and lower-case versions of the keyval `symbol`.
         * Examples of keyvals are #GDK_KEY_a, #GDK_KEY_Enter, #GDK_KEY_F1, etc.
         * @param symbol a keyval
         */
        function keyval_convert_case(symbol: number): [number, number];
        /**
         * Converts a key name to a key value.
         *
         * The names are the same as those in the
         * `gdk/gdkkeysyms.h` header file
         * but without the leading “GDK_KEY_”.
         * @param keyval_name a key name
         * @returns the corresponding key value, or %GDK_KEY_VoidSymbol     if the key name is not a valid key
         */
        function keyval_from_name(keyval_name: string): number;
        /**
         * Returns %TRUE if the given key value is in lower case.
         * @param keyval a key value.
         * @returns %TRUE if @keyval is in lower case, or if @keyval is not   subject to case conversion.
         */
        function keyval_is_lower(keyval: number): boolean;
        /**
         * Returns %TRUE if the given key value is in upper case.
         * @param keyval a key value.
         * @returns %TRUE if @keyval is in upper case, or if @keyval is not subject to  case conversion.
         */
        function keyval_is_upper(keyval: number): boolean;
        /**
         * Converts a key value into a symbolic name.
         *
         * The names are the same as those in the
         * `gdk/gdkkeysyms.h` header file
         * but without the leading “GDK_KEY_”.
         * @param keyval a key value
         * @returns a string containing the name     of the key, or %NULL if @keyval is not a valid key. The string     should not be modified.
         */
        function keyval_name(keyval: number): string | null;
        /**
         * Converts a key value to lower case, if applicable.
         * @param keyval a key value.
         * @returns the lower case form of @keyval, or @keyval itself if it is already  in lower case or it is not subject to case conversion.
         */
        function keyval_to_lower(keyval: number): number;
        /**
         * Convert from a GDK key symbol to the corresponding ISO10646 (Unicode)
         * character.
         * @param keyval a GDK key symbol
         * @returns the corresponding unicode character, or 0 if there               is no corresponding character.
         */
        function keyval_to_unicode(keyval: number): number;
        /**
         * Converts a key value to upper case, if applicable.
         * @param keyval a key value.
         * @returns the upper case form of @keyval, or @keyval itself if it is already   in upper case or it is not subject to case conversion.
         */
        function keyval_to_upper(keyval: number): number;
        /**
         * Lists the available visuals for the default screen.
         * (See gdk_screen_list_visuals())
         * A visual describes a hardware image data format.
         * For example, a visual might support 24-bit color, or 8-bit color,
         * and might expect pixels to be in a certain format.
         *
         * Call g_list_free() on the return value when you’re finished with it.
         * @returns a list of visuals; the list must be freed, but not its contents
         */
        function list_visuals(): Visual[];
        /**
         * Indicates to the GUI environment that the application has finished
         * loading. If the applications opens windows, this function is
         * normally called after opening the application’s initial set of
         * windows.
         *
         * GTK+ will call this function automatically after opening the first
         * #GtkWindow unless gtk_window_set_auto_startup_notification() is called
         * to disable that feature.
         */
        function notify_startup_complete(): void;
        /**
         * Indicates to the GUI environment that the application has
         * finished loading, using a given identifier.
         *
         * GTK+ will call this function automatically for #GtkWindow
         * with custom startup-notification identifier unless
         * gtk_window_set_auto_startup_notification() is called to
         * disable that feature.
         * @param startup_id a startup-notification identifier, for which     notification process should be completed
         */
        function notify_startup_complete_with_id(startup_id: string): void;
        /**
         * Gets the window that `window` is embedded in.
         * @param window a #GdkWindow
         * @returns the embedding #GdkWindow, or     %NULL if @window is not an mbedded offscreen window
         */
        function offscreen_window_get_embedder(window: Window): Window | null;
        /**
         * Gets the offscreen surface that an offscreen window renders into.
         * If you need to keep this around over window resizes, you need to
         * add a reference to it.
         * @param window a #GdkWindow
         * @returns The offscreen surface, or   %NULL if not offscreen
         */
        function offscreen_window_get_surface(window: Window): cairo.Surface | null;
        /**
         * Sets `window` to be embedded in `embedder`.
         *
         * To fully embed an offscreen window, in addition to calling this
         * function, it is also necessary to handle the #GdkWindow::pick-embedded-child
         * signal on the `embedder` and the #GdkWindow::to-embedder and
         * #GdkWindow::from-embedder signals on `window`.
         * @param window a #GdkWindow
         * @param embedder the #GdkWindow that @window gets embedded in
         */
        function offscreen_window_set_embedder(window: Window, embedder: Window): void;
        /**
         * Creates a #PangoContext for the default GDK screen.
         *
         * The context must be freed when you’re finished with it.
         *
         * When using GTK+, normally you should use gtk_widget_get_pango_context()
         * instead of this function, to get the appropriate context for
         * the widget you intend to render text onto.
         *
         * The newly created context will have the default font options (see
         * #cairo_font_options_t) for the default screen; if these options
         * change it will not be updated. Using gtk_widget_get_pango_context()
         * is more convenient if you want to keep a context around and track
         * changes to the screen’s font rendering settings.
         * @returns a new #PangoContext for the default display
         */
        function pango_context_get(): Pango.Context;
        /**
         * Creates a #PangoContext for `display`.
         *
         * The context must be freed when you’re finished with it.
         *
         * When using GTK+, normally you should use gtk_widget_get_pango_context()
         * instead of this function, to get the appropriate context for
         * the widget you intend to render text onto.
         *
         * The newly created context will have the default font options
         * (see #cairo_font_options_t) for the display; if these options
         * change it will not be updated. Using gtk_widget_get_pango_context()
         * is more convenient if you want to keep a context around and track
         * changes to the font rendering settings.
         * @param display the #GdkDisplay for which the context is to be created
         * @returns a new #PangoContext for @display
         */
        function pango_context_get_for_display(display: Display): Pango.Context;
        /**
         * Creates a #PangoContext for `screen`.
         *
         * The context must be freed when you’re finished with it.
         *
         * When using GTK+, normally you should use gtk_widget_get_pango_context()
         * instead of this function, to get the appropriate context for
         * the widget you intend to render text onto.
         *
         * The newly created context will have the default font options
         * (see #cairo_font_options_t) for the screen; if these options
         * change it will not be updated. Using gtk_widget_get_pango_context()
         * is more convenient if you want to keep a context around and track
         * changes to the screen’s font rendering settings.
         * @param screen the #GdkScreen for which the context is to be created.
         * @returns a new #PangoContext for @screen
         */
        function pango_context_get_for_screen(screen: Screen): Pango.Context;
        /**
         * Parse command line arguments, and store for future
         * use by calls to gdk_display_open().
         *
         * Any arguments used by GDK are removed from the array and `argc` and `argv` are
         * updated accordingly.
         *
         * You shouldn’t call this function explicitly if you are using
         * gtk_init(), gtk_init_check(), gdk_init(), or gdk_init_check().
         * @param argv the array of command line arguments.
         */
        function parse_args(argv: string[]): string[];
        /**
         * Transfers image data from a #cairo_surface_t and converts it to an RGB(A)
         * representation inside a #GdkPixbuf. This allows you to efficiently read
         * individual pixels from cairo surfaces. For #GdkWindows, use
         * gdk_pixbuf_get_from_window() instead.
         *
         * This function will create an RGB pixbuf with 8 bits per channel.
         * The pixbuf will contain an alpha channel if the `surface` contains one.
         * @param surface surface to copy from
         * @param src_x Source X coordinate within @surface
         * @param src_y Source Y coordinate within @surface
         * @param width Width in pixels of region to get
         * @param height Height in pixels of region to get
         * @returns A newly-created pixbuf with a     reference count of 1, or %NULL on error
         */
        function pixbuf_get_from_surface(
            surface: cairo.Surface,
            src_x: number,
            src_y: number,
            width: number,
            height: number,
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Transfers image data from a #GdkWindow and converts it to an RGB(A)
         * representation inside a #GdkPixbuf.
         *
         * In other words, copies image data from a server-side drawable to a
         * client-side RGB(A) buffer. This allows you to efficiently read
         * individual pixels on the client side.
         *
         * This function will create an RGB pixbuf with 8 bits per channel with
         * the size specified by the `width` and `height` arguments scaled by the
         * scale factor of `window`. The pixbuf will contain an alpha channel if
         * the `window` contains one.
         *
         * If the window is off the screen, then there is no image data in the
         * obscured/offscreen regions to be placed in the pixbuf. The contents of
         * portions of the pixbuf corresponding to the offscreen region are
         * undefined.
         *
         * If the window you’re obtaining data from is partially obscured by
         * other windows, then the contents of the pixbuf areas corresponding
         * to the obscured regions are undefined.
         *
         * If the window is not mapped (typically because it’s iconified/minimized
         * or not on the current workspace), then %NULL will be returned.
         *
         * If memory can’t be allocated for the return value, %NULL will be returned
         * instead.
         *
         * In short, there are several ways this function can fail, and if it fails
         * it returns %NULL; so check the return value.
         *
         * You should rarely, if ever, need to call this function.
         * @param window Source window
         * @param src_x Source X coordinate within @window
         * @param src_y Source Y coordinate within @window
         * @param width Width in pixels of region to get
         * @param height Height in pixels of region to get
         * @returns A newly-created pixbuf with a   reference count of 1, or %NULL on error
         */
        function pixbuf_get_from_window(
            window: Window,
            src_x: number,
            src_y: number,
            width: number,
            height: number,
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Grabs the pointer (usually a mouse) so that all events are passed to this
         * application until the pointer is ungrabbed with gdk_pointer_ungrab(), or
         * the grab window becomes unviewable.
         * This overrides any previous pointer grab by this client.
         *
         * Pointer grabs are used for operations which need complete control over mouse
         * events, even if the mouse leaves the application.
         * For example in GTK+ it is used for Drag and Drop, for dragging the handle in
         * the #GtkHPaned and #GtkVPaned widgets.
         *
         * Note that if the event mask of an X window has selected both button press and
         * button release events, then a button press event will cause an automatic
         * pointer grab until the button is released.
         * X does this automatically since most applications expect to receive button
         * press and release events in pairs.
         * It is equivalent to a pointer grab on the window with `owner_events` set to
         * %TRUE.
         *
         * If you set up anything at the time you take the grab that needs to be cleaned
         * up when the grab ends, you should handle the #GdkEventGrabBroken events that
         * are emitted when the grab ends unvoluntarily.
         * @param window the #GdkWindow which will own the grab (the grab window).
         * @param owner_events if %FALSE then all pointer events are reported with respect to                @window and are only reported if selected by @event_mask. If %TRUE then pointer                events for this application are reported as normal, but pointer events outside                this application are reported with respect to @window and only if selected by                @event_mask. In either mode, unreported events are discarded.
         * @param event_mask specifies the event mask, which is used in accordance with              @owner_events. Note that only pointer events (i.e. button and motion events)              may be selected.
         * @param confine_to If non-%NULL, the pointer will be confined to this              window during the grab. If the pointer is outside @confine_to, it will              automatically be moved to the closest edge of @confine_to and enter              and leave events will be generated as necessary.
         * @param cursor the cursor to display while the grab is active. If this is %NULL then          the normal cursors are used for @window and its descendants, and the cursor          for @window is used for all other windows.
         * @param time_ the timestamp of the event which led to this pointer grab. This usually         comes from a #GdkEventButton struct, though %GDK_CURRENT_TIME can be used if         the time isn’t known.
         * @returns %GDK_GRAB_SUCCESS if the grab was successful.
         */
        function pointer_grab(
            window: Window,
            owner_events: boolean,
            event_mask: EventMask | null,
            confine_to: Window | null,
            cursor: Cursor | null,
            time_: number,
        ): GrabStatus;
        /**
         * Returns %TRUE if the pointer on the default display is currently
         * grabbed by this application.
         *
         * Note that this does not take the inmplicit pointer grab on button
         * presses into account.
         * @returns %TRUE if the pointer is currently grabbed by this application.
         */
        function pointer_is_grabbed(): boolean;
        /**
         * Ungrabs the pointer on the default display, if it is grabbed by this
         * application.
         * @param time_ a timestamp from a #GdkEvent, or %GDK_CURRENT_TIME if no  timestamp is available.
         */
        function pointer_ungrab(time_: number): void;
        /**
         * Prepare for parsing command line arguments for GDK. This is not
         * public API and should not be used in application code.
         */
        function pre_parse_libgtk_only(): void;
        /**
         * Deletes a property from a window.
         * @param window a #GdkWindow
         * @param property the property to delete
         */
        function property_delete(window: Window, property: Atom): void;
        /**
         * Retrieves a portion of the contents of a property. If the
         * property does not exist, then the function returns %FALSE,
         * and %GDK_NONE will be stored in `actual_property_type`.
         *
         * The XGetWindowProperty() function that gdk_property_get()
         * uses has a very confusing and complicated set of semantics.
         * Unfortunately, gdk_property_get() makes the situation
         * worse instead of better (the semantics should be considered
         * undefined), and also prints warnings to stderr in cases where it
         * should return a useful error to the program. You are advised to use
         * XGetWindowProperty() directly until a replacement function for
         * gdk_property_get() is provided.
         * @param window a #GdkWindow
         * @param property the property to retrieve
         * @param type the desired property type, or %GDK_NONE, if any type of data   is acceptable. If this does not match the actual   type, then @actual_format and @actual_length will   be filled in, a warning will be printed to stderr   and no data will be returned.
         * @param offset the offset into the property at which to begin   retrieving data, in 4 byte units.
         * @param length the length of the data to retrieve in bytes.  Data is   considered to be retrieved in 4 byte chunks, so @length   will be rounded up to the next highest 4 byte boundary   (so be careful not to pass a value that might overflow   when rounded up).
         * @param pdelete if %TRUE, delete the property after retrieving the   data.
         * @returns %TRUE if data was successfully received and stored   in @data, otherwise %FALSE.
         */
        function property_get(
            window: Window,
            property: Atom,
            type: Atom,
            offset: number,
            length: number,
            pdelete: number,
        ): [boolean, Atom, number, Uint8Array];
        /**
         * This function returns the available bit depths for the default
         * screen. It’s equivalent to listing the visuals
         * (gdk_list_visuals()) and then looking at the depth field in each
         * visual, removing duplicates.
         *
         * The array returned by this function should not be freed.
         */
        function query_depths(): number[];
        /**
         * This function returns the available visual types for the default
         * screen. It’s equivalent to listing the visuals
         * (gdk_list_visuals()) and then looking at the type field in each
         * visual, removing duplicates.
         *
         * The array returned by this function should not be freed.
         */
        function query_visual_types(): VisualType[];
        /**
         * Retrieves the contents of a selection in a given
         * form.
         * @param requestor a #GdkWindow.
         * @param selection an atom identifying the selection to get the   contents of.
         * @param target the form in which to retrieve the selection.
         * @param time_ the timestamp to use when retrieving the   selection. The selection owner may refuse the   request if it did not own the selection at   the time indicated by the timestamp.
         */
        function selection_convert(requestor: Window, selection: Atom, target: Atom, time_: number): void;
        /**
         * Determines the owner of the given selection.
         * @param selection an atom indentifying a selection.
         * @returns if there is a selection owner   for this window, and it is a window known to the current process,   the #GdkWindow that owns the selection, otherwise %NULL. Note   that the return value may be owned by a different process if a   foreign window was previously created for that window, but a new   foreign window will never be created by this call.
         */
        function selection_owner_get(selection: Atom): Window | null;
        /**
         * Determine the owner of the given selection.
         *
         * Note that the return value may be owned by a different
         * process if a foreign window was previously created for that
         * window, but a new foreign window will never be created by this call.
         * @param display a #GdkDisplay
         * @param selection an atom indentifying a selection
         * @returns if there is a selection owner    for this window, and it is a window known to the current    process, the #GdkWindow that owns the selection, otherwise    %NULL.
         */
        function selection_owner_get_for_display(display: Display, selection: Atom): Window | null;
        /**
         * Sets the owner of the given selection.
         * @param owner a #GdkWindow or %NULL to indicate that the   the owner for the given should be unset.
         * @param selection an atom identifying a selection.
         * @param time_ timestamp to use when setting the selection.   If this is older than the timestamp given last   time the owner was set for the given selection, the   request will be ignored.
         * @param send_event if %TRUE, and the new owner is different   from the current owner, the current owner   will be sent a SelectionClear event.
         * @returns %TRUE if the selection owner was successfully   changed to @owner, otherwise %FALSE.
         */
        function selection_owner_set(
            owner: Window | null,
            selection: Atom,
            time_: number,
            send_event: boolean,
        ): boolean;
        /**
         * Sets the #GdkWindow `owner` as the current owner of the selection `selection`.
         * @param display the #GdkDisplay
         * @param owner a #GdkWindow or %NULL to indicate that the owner for         the given should be unset
         * @param selection an atom identifying a selection
         * @param time_ timestamp to use when setting the selection         If this is older than the timestamp given last time the owner was         set for the given selection, the request will be ignored
         * @param send_event if %TRUE, and the new owner is different from the current              owner, the current owner will be sent a SelectionClear event
         * @returns %TRUE if the selection owner was successfully changed to owner,    otherwise %FALSE.
         */
        function selection_owner_set_for_display(
            display: Display,
            owner: Window | null,
            selection: Atom,
            time_: number,
            send_event: boolean,
        ): boolean;
        /**
         * Sends a response to SelectionRequest event.
         * @param requestor window to which to deliver response.
         * @param selection selection that was requested.
         * @param target target that was selected.
         * @param property property in which the selection owner stored the   data, or %GDK_NONE to indicate that the request   was rejected.
         * @param time_ timestamp.
         */
        function selection_send_notify(
            requestor: Window,
            selection: Atom,
            target: Atom,
            property: Atom,
            time_: number,
        ): void;
        /**
         * Send a response to SelectionRequest event.
         * @param display the #GdkDisplay where @requestor is realized
         * @param requestor window to which to deliver response
         * @param selection selection that was requested
         * @param target target that was selected
         * @param property property in which the selection owner stored the data,            or %GDK_NONE to indicate that the request was rejected
         * @param time_ timestamp
         */
        function selection_send_notify_for_display(
            display: Display,
            requestor: Window,
            selection: Atom,
            target: Atom,
            property: Atom,
            time_: number,
        ): void;
        /**
         * Sets a list of backends that GDK should try to use.
         *
         * This can be be useful if your application does not
         * work with certain GDK backends.
         *
         * By default, GDK tries all included backends.
         *
         * For example,
         *
         * ```c
         * gdk_set_allowed_backends ("wayland,quartz,*");
         * ```
         *
         * instructs GDK to try the Wayland backend first,
         * followed by the Quartz backend, and then all
         * others.
         *
         * If the `GDK_BACKEND` environment variable
         * is set, it determines what backends are tried in what
         * order, while still respecting the set of allowed backends
         * that are specified by this function.
         *
         * The possible backend names are x11, win32, quartz,
         * broadway, wayland. You can also include a * in the
         * list to try all remaining backends.
         *
         * This call must happen prior to gdk_display_open(),
         * gtk_init(), gtk_init_with_args() or gtk_init_check()
         * in order to take effect.
         * @param backends a comma-separated list of backends
         */
        function set_allowed_backends(backends: string): void;
        /**
         * Set the double click time for the default display. See
         * gdk_display_set_double_click_time().
         * See also gdk_display_set_double_click_distance().
         * Applications should not set this, it is a
         * global user-configured setting.
         * @param msec double click time in milliseconds (thousandths of a second)
         */
        function set_double_click_time(msec: number): void;
        /**
         * Sets the program class. The X11 backend uses the program class to set
         * the class name part of the `WM_CLASS` property on
         * toplevel windows; see the ICCCM.
         *
         * The program class can still be overridden with the --class command
         * line option.
         * @param program_class a string.
         */
        function set_program_class(program_class: string): void;
        /**
         * Sets whether a trace of received events is output.
         * Note that GTK+ must be compiled with debugging (that is,
         * configured using the `--enable-debug` option)
         * to use this option.
         * @param show_events %TRUE to output event debugging information.
         */
        function set_show_events(show_events: boolean): void;
        /**
         * Obtains a desktop-wide setting, such as the double-click time,
         * for the default screen. See gdk_screen_get_setting().
         * @param name the name of the setting.
         * @param value location to store the value of the setting.
         * @returns %TRUE if the setting existed and a value was stored   in @value, %FALSE otherwise.
         */
        function setting_get(name: string, value: GObject.Value | any): boolean;
        function synthesize_window_state(
            window: Window,
            unset_flags: WindowState | null,
            set_flags: WindowState | null,
        ): void;
        /**
         * Retrieves a pixel from `window` to force the windowing
         * system to carry out any pending rendering commands.
         *
         * This function is intended to be used to synchronize with rendering
         * pipelines, to benchmark windowing system rendering operations.
         * @param window a mapped #GdkWindow
         */
        function test_render_sync(window: Window): void;
        /**
         * This function is intended to be used in GTK+ test programs.
         * It will warp the mouse pointer to the given (`x,``y)` coordinates
         * within `window` and simulate a button press or release event.
         * Because the mouse pointer needs to be warped to the target
         * location, use of this function outside of test programs that
         * run in their own virtual windowing system (e.g. Xvfb) is not
         * recommended.
         *
         * Also, gdk_test_simulate_button() is a fairly low level function,
         * for most testing purposes, gtk_test_widget_click() is the right
         * function to call which will generate a button press event followed
         * by its accompanying button release event.
         * @param window a #GdkWindow to simulate a button event for
         * @param x x coordinate within @window for the button event
         * @param y y coordinate within @window for the button event
         * @param button Number of the pointer button for the event, usually 1, 2 or 3
         * @param modifiers Keyboard modifiers the event is setup with
         * @param button_pressrelease either %GDK_BUTTON_PRESS or %GDK_BUTTON_RELEASE
         * @returns whether all actions necessary for a button event simulation     were carried out successfully
         */
        function test_simulate_button(
            window: Window,
            x: number,
            y: number,
            button: number,
            modifiers: ModifierType | null,
            button_pressrelease: EventType | null,
        ): boolean;
        /**
         * This function is intended to be used in GTK+ test programs.
         * If (`x,``y)` are > (-1,-1), it will warp the mouse pointer to
         * the given (`x,``y)` coordinates within `window` and simulate a
         * key press or release event.
         *
         * When the mouse pointer is warped to the target location, use
         * of this function outside of test programs that run in their
         * own virtual windowing system (e.g. Xvfb) is not recommended.
         * If (`x,``y)` are passed as (-1,-1), the mouse pointer will not
         * be warped and `window` origin will be used as mouse pointer
         * location for the event.
         *
         * Also, gdk_test_simulate_key() is a fairly low level function,
         * for most testing purposes, gtk_test_widget_send_key() is the
         * right function to call which will generate a key press event
         * followed by its accompanying key release event.
         * @param window a #GdkWindow to simulate a key event for
         * @param x x coordinate within @window for the key event
         * @param y y coordinate within @window for the key event
         * @param keyval A GDK keyboard value
         * @param modifiers Keyboard modifiers the event is setup with
         * @param key_pressrelease either %GDK_KEY_PRESS or %GDK_KEY_RELEASE
         * @returns whether all actions necessary for a key event simulation     were carried out successfully
         */
        function test_simulate_key(
            window: Window,
            x: number,
            y: number,
            keyval: number,
            modifiers: ModifierType | null,
            key_pressrelease: EventType | null,
        ): boolean;
        /**
         * Converts a text property in the given encoding to
         * a list of UTF-8 strings.
         * @param display a #GdkDisplay
         * @param encoding an atom representing the encoding of the text
         * @param format the format of the property
         * @param text the text to convert
         * @returns the number of strings in the resulting list
         */
        function text_property_to_utf8_list_for_display(
            display: Display,
            encoding: Atom,
            format: number,
            text: Uint8Array | string,
        ): [number, string[]];
        /**
         * Adds a function to be called whenever there are no higher priority
         * events pending.  If the function returns %FALSE it is automatically
         * removed from the list of event sources and will not be called again.
         *
         * This variant of g_idle_add_full() calls `function` with the GDK lock
         * held. It can be thought of a MT-safe version for GTK+ widgets for the
         * following use case, where you have to worry about idle_callback()
         * running in thread A and accessing `self` after it has been finalized
         * in thread B:
         *
         *
         * ```c
         * static gboolean
         * idle_callback (gpointer data)
         * {
         *    // gdk_threads_enter(); would be needed for g_idle_add()
         *
         *    SomeWidget *self = data;
         *    // do stuff with self
         *
         *    self->idle_id = 0;
         *
         *    // gdk_threads_leave(); would be needed for g_idle_add()
         *    return FALSE;
         * }
         *
         * static void
         * some_widget_do_stuff_later (SomeWidget *self)
         * {
         *    self->idle_id = gdk_threads_add_idle (idle_callback, self)
         *    // using g_idle_add() here would require thread protection in the callback
         * }
         *
         * static void
         * some_widget_finalize (GObject *object)
         * {
         *    SomeWidget *self = SOME_WIDGET (object);
         *    if (self->idle_id)
         *      g_source_remove (self->idle_id);
         *    G_OBJECT_CLASS (parent_class)->finalize (object);
         * }
         * ```
         *
         * @param priority the priority of the idle source. Typically this will be in the            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE
         * @param _function function to call
         * @param notify function to call when the idle is removed, or %NULL
         * @returns the ID (greater than 0) of the event source.
         */
        function threads_add_idle(
            priority: number,
            _function: GLib.SourceFunc,
            notify?: GLib.DestroyNotify | null,
        ): number;
        /**
         * Sets a function to be called at regular intervals holding the GDK lock,
         * with the given priority.  The function is called repeatedly until it
         * returns %FALSE, at which point the timeout is automatically destroyed
         * and the function will not be called again.  The `notify` function is
         * called when the timeout is destroyed.  The first call to the
         * function will be at the end of the first `interval`.
         *
         * Note that timeout functions may be delayed, due to the processing of other
         * event sources. Thus they should not be relied on for precise timing.
         * After each call to the timeout function, the time of the next
         * timeout is recalculated based on the current time and the given interval
         * (it does not try to “catch up” time lost in delays).
         *
         * This variant of g_timeout_add_full() can be thought of a MT-safe version
         * for GTK+ widgets for the following use case:
         *
         *
         * ```c
         * static gboolean timeout_callback (gpointer data)
         * {
         *    SomeWidget *self = data;
         *
         *    // do stuff with self
         *
         *    self->timeout_id = 0;
         *
         *    return G_SOURCE_REMOVE;
         * }
         *
         * static void some_widget_do_stuff_later (SomeWidget *self)
         * {
         *    self->timeout_id = g_timeout_add (timeout_callback, self)
         * }
         *
         * static void some_widget_finalize (GObject *object)
         * {
         *    SomeWidget *self = SOME_WIDGET (object);
         *
         *    if (self->timeout_id)
         *      g_source_remove (self->timeout_id);
         *
         *    G_OBJECT_CLASS (parent_class)->finalize (object);
         * }
         * ```
         *
         * @param priority the priority of the timeout source. Typically this will be in the            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE.
         * @param interval the time between calls to the function, in milliseconds             (1/1000ths of a second)
         * @param _function function to call
         * @param notify function to call when the timeout is removed, or %NULL
         * @returns the ID (greater than 0) of the event source.
         */
        function threads_add_timeout(
            priority: number,
            interval: number,
            _function: GLib.SourceFunc,
            notify?: GLib.DestroyNotify | null,
        ): number;
        /**
         * A variant of gdk_threads_add_timeout_full() with second-granularity.
         * See g_timeout_add_seconds_full() for a discussion of why it is
         * a good idea to use this function if you don’t need finer granularity.
         * @param priority the priority of the timeout source. Typically this will be in the            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE.
         * @param interval the time between calls to the function, in seconds
         * @param _function function to call
         * @param notify function to call when the timeout is removed, or %NULL
         * @returns the ID (greater than 0) of the event source.
         */
        function threads_add_timeout_seconds(
            priority: number,
            interval: number,
            _function: GLib.SourceFunc,
            notify?: GLib.DestroyNotify | null,
        ): number;
        /**
         * This function marks the beginning of a critical section in which
         * GDK and GTK+ functions can be called safely and without causing race
         * conditions. Only one thread at a time can be in such a critial
         * section.
         */
        function threads_enter(): void;
        /**
         * Initializes GDK so that it can be used from multiple threads
         * in conjunction with gdk_threads_enter() and gdk_threads_leave().
         *
         * This call must be made before any use of the main loop from
         * GTK+; to be safe, call it before gtk_init().
         */
        function threads_init(): void;
        /**
         * Leaves a critical region begun with gdk_threads_enter().
         */
        function threads_leave(): void;
        /**
         * Convert from a ISO10646 character to a key symbol.
         * @param wc a ISO10646 encoded character
         * @returns the corresponding GDK key symbol, if one exists.               or, if there is no corresponding symbol,               wc | 0x01000000
         */
        function unicode_to_keyval(wc: number): number;
        /**
         * Converts an UTF-8 string into the best possible representation
         * as a STRING. The representation of characters not in STRING
         * is not specified; it may be as pseudo-escape sequences
         * \x{ABCD}, or it may be in some other form of approximation.
         * @param str a UTF-8 string
         * @returns the newly-allocated string, or %NULL if the          conversion failed. (It should not fail for any properly          formed UTF-8 string unless system limits like memory or          file descriptors are exceeded.)
         */
        function utf8_to_string_target(str: string): string | null;
        interface EventFunc {
            (event: Event): void;
        }
        interface FilterFunc {
            (xevent: XEvent, event: Event): FilterReturn;
        }
        interface SeatGrabPrepareFunc {
            (seat: Seat, window: Window): void;
        }
        interface WindowChildFunc {
            (window: Window): boolean;
        }
        interface WindowInvalidateHandlerFunc {
            (window: Window, region: cairo.Region): void;
        }
        /**
         * Positioning hints for aligning a window relative to a rectangle.
         *
         * These hints determine how the window should be positioned in the case that
         * the window would fall off-screen if placed in its ideal position.
         *
         * For example, %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
         * %GDK_GRAVITY_NORTH_EAST and vice versa if the window extends beyond the left
         * or right edges of the monitor.
         *
         * If %GDK_ANCHOR_SLIDE_X is set, the window can be shifted horizontally to fit
         * on-screen. If %GDK_ANCHOR_RESIZE_X is set, the window can be shrunken
         * horizontally to fit.
         *
         * In general, when multiple flags are set, flipping should take precedence over
         * sliding, which should take precedence over resizing.
         */

        /**
         * Positioning hints for aligning a window relative to a rectangle.
         *
         * These hints determine how the window should be positioned in the case that
         * the window would fall off-screen if placed in its ideal position.
         *
         * For example, %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
         * %GDK_GRAVITY_NORTH_EAST and vice versa if the window extends beyond the left
         * or right edges of the monitor.
         *
         * If %GDK_ANCHOR_SLIDE_X is set, the window can be shifted horizontally to fit
         * on-screen. If %GDK_ANCHOR_RESIZE_X is set, the window can be shrunken
         * horizontally to fit.
         *
         * In general, when multiple flags are set, flipping should take precedence over
         * sliding, which should take precedence over resizing.
         */
        export namespace AnchorHints {
            export const $gtype: GObject.GType<AnchorHints>;
        }

        enum AnchorHints {
            /**
             * allow flipping anchors horizontally
             */
            FLIP_X,
            /**
             * allow flipping anchors vertically
             */
            FLIP_Y,
            /**
             * allow sliding window horizontally
             */
            SLIDE_X,
            /**
             * allow sliding window vertically
             */
            SLIDE_Y,
            /**
             * allow resizing window horizontally
             */
            RESIZE_X,
            /**
             * allow resizing window vertically
             */
            RESIZE_Y,
            /**
             * allow flipping anchors on both axes
             */
            FLIP,
            /**
             * allow sliding window on both axes
             */
            SLIDE,
            /**
             * allow resizing window on both axes
             */
            RESIZE,
        }
        /**
         * Flags describing the current capabilities of a device/tool.
         */

        /**
         * Flags describing the current capabilities of a device/tool.
         */
        export namespace AxisFlags {
            export const $gtype: GObject.GType<AxisFlags>;
        }

        enum AxisFlags {
            /**
             * X axis is present
             */
            X,
            /**
             * Y axis is present
             */
            Y,
            /**
             * Pressure axis is present
             */
            PRESSURE,
            /**
             * X tilt axis is present
             */
            XTILT,
            /**
             * Y tilt axis is present
             */
            YTILT,
            /**
             * Wheel axis is present
             */
            WHEEL,
            /**
             * Distance axis is present
             */
            DISTANCE,
            /**
             * Z-axis rotation is present
             */
            ROTATION,
            /**
             * Slider axis is present
             */
            SLIDER,
        }
        /**
         * Used in #GdkDragContext to indicate what the destination
         * should do with the dropped data.
         */

        /**
         * Used in #GdkDragContext to indicate what the destination
         * should do with the dropped data.
         */
        export namespace DragAction {
            export const $gtype: GObject.GType<DragAction>;
        }

        enum DragAction {
            /**
             * Means nothing, and should not be used.
             */
            DEFAULT,
            /**
             * Copy the data.
             */
            COPY,
            /**
             * Move the data, i.e. first copy it, then delete
             *  it from the source using the DELETE target of the X selection protocol.
             */
            MOVE,
            /**
             * Add a link to the data. Note that this is only
             *  useful if source and destination agree on what it means.
             */
            LINK,
            /**
             * Special action which tells the source that the
             *  destination will do something that the source doesn’t understand.
             */
            PRIVATE,
            /**
             * Ask the user what to do with the data.
             */
            ASK,
        }
        /**
         * A set of bit-flags to indicate which events a window is to receive.
         * Most of these masks map onto one or more of the #GdkEventType event types
         * above.
         *
         * See the [input handling overview][chap-input-handling] for details of
         * [event masks][event-masks] and [event propagation][event-propagation].
         *
         * %GDK_POINTER_MOTION_HINT_MASK is deprecated. It is a special mask
         * to reduce the number of %GDK_MOTION_NOTIFY events received. When using
         * %GDK_POINTER_MOTION_HINT_MASK, fewer %GDK_MOTION_NOTIFY events will
         * be sent, some of which are marked as a hint (the is_hint member is
         * %TRUE). To receive more motion events after a motion hint event,
         * the application needs to asks for more, by calling
         * gdk_event_request_motions().
         *
         * Since GTK 3.8, motion events are already compressed by default, independent
         * of this mechanism. This compression can be disabled with
         * gdk_window_set_event_compression(). See the documentation of that function
         * for details.
         *
         * If %GDK_TOUCH_MASK is enabled, the window will receive touch events
         * from touch-enabled devices. Those will come as sequences of #GdkEventTouch
         * with type %GDK_TOUCH_UPDATE, enclosed by two events with
         * type %GDK_TOUCH_BEGIN and %GDK_TOUCH_END (or %GDK_TOUCH_CANCEL).
         * gdk_event_get_event_sequence() returns the event sequence for these
         * events, so different sequences may be distinguished.
         */

        /**
         * A set of bit-flags to indicate which events a window is to receive.
         * Most of these masks map onto one or more of the #GdkEventType event types
         * above.
         *
         * See the [input handling overview][chap-input-handling] for details of
         * [event masks][event-masks] and [event propagation][event-propagation].
         *
         * %GDK_POINTER_MOTION_HINT_MASK is deprecated. It is a special mask
         * to reduce the number of %GDK_MOTION_NOTIFY events received. When using
         * %GDK_POINTER_MOTION_HINT_MASK, fewer %GDK_MOTION_NOTIFY events will
         * be sent, some of which are marked as a hint (the is_hint member is
         * %TRUE). To receive more motion events after a motion hint event,
         * the application needs to asks for more, by calling
         * gdk_event_request_motions().
         *
         * Since GTK 3.8, motion events are already compressed by default, independent
         * of this mechanism. This compression can be disabled with
         * gdk_window_set_event_compression(). See the documentation of that function
         * for details.
         *
         * If %GDK_TOUCH_MASK is enabled, the window will receive touch events
         * from touch-enabled devices. Those will come as sequences of #GdkEventTouch
         * with type %GDK_TOUCH_UPDATE, enclosed by two events with
         * type %GDK_TOUCH_BEGIN and %GDK_TOUCH_END (or %GDK_TOUCH_CANCEL).
         * gdk_event_get_event_sequence() returns the event sequence for these
         * events, so different sequences may be distinguished.
         */
        export namespace EventMask {
            export const $gtype: GObject.GType<EventMask>;
        }

        enum EventMask {
            /**
             * receive expose events
             */
            EXPOSURE_MASK,
            /**
             * receive all pointer motion events
             */
            POINTER_MOTION_MASK,
            /**
             * deprecated. see the explanation above
             */
            POINTER_MOTION_HINT_MASK,
            /**
             * receive pointer motion events while any button is pressed
             */
            BUTTON_MOTION_MASK,
            /**
             * receive pointer motion events while 1 button is pressed
             */
            BUTTON1_MOTION_MASK,
            /**
             * receive pointer motion events while 2 button is pressed
             */
            BUTTON2_MOTION_MASK,
            /**
             * receive pointer motion events while 3 button is pressed
             */
            BUTTON3_MOTION_MASK,
            /**
             * receive button press events
             */
            BUTTON_PRESS_MASK,
            /**
             * receive button release events
             */
            BUTTON_RELEASE_MASK,
            /**
             * receive key press events
             */
            KEY_PRESS_MASK,
            /**
             * receive key release events
             */
            KEY_RELEASE_MASK,
            /**
             * receive window enter events
             */
            ENTER_NOTIFY_MASK,
            /**
             * receive window leave events
             */
            LEAVE_NOTIFY_MASK,
            /**
             * receive focus change events
             */
            FOCUS_CHANGE_MASK,
            /**
             * receive events about window configuration change
             */
            STRUCTURE_MASK,
            /**
             * receive property change events
             */
            PROPERTY_CHANGE_MASK,
            /**
             * receive visibility change events
             */
            VISIBILITY_NOTIFY_MASK,
            /**
             * receive proximity in events
             */
            PROXIMITY_IN_MASK,
            /**
             * receive proximity out events
             */
            PROXIMITY_OUT_MASK,
            /**
             * receive events about window configuration changes of
             *   child windows
             */
            SUBSTRUCTURE_MASK,
            /**
             * receive scroll events
             */
            SCROLL_MASK,
            /**
             * receive touch events. Since 3.4
             */
            TOUCH_MASK,
            /**
             * receive smooth scrolling events. Since 3.4
             */
            SMOOTH_SCROLL_MASK,
            /**
             * receive touchpad gesture events. Since 3.18
             */
            TOUCHPAD_GESTURE_MASK,
            /**
             * receive tablet pad events. Since 3.22
             */
            TABLET_PAD_MASK,
            /**
             * the combination of all the above event masks.
             */
            ALL_EVENTS_MASK,
        }
        /**
         * #GdkFrameClockPhase is used to represent the different paint clock
         * phases that can be requested. The elements of the enumeration
         * correspond to the signals of #GdkFrameClock.
         */

        /**
         * #GdkFrameClockPhase is used to represent the different paint clock
         * phases that can be requested. The elements of the enumeration
         * correspond to the signals of #GdkFrameClock.
         */
        export namespace FrameClockPhase {
            export const $gtype: GObject.GType<FrameClockPhase>;
        }

        enum FrameClockPhase {
            /**
             * no phase
             */
            NONE,
            /**
             * corresponds to GdkFrameClock::flush-events. Should not be handled by applications.
             */
            FLUSH_EVENTS,
            /**
             * corresponds to GdkFrameClock::before-paint. Should not be handled by applications.
             */
            BEFORE_PAINT,
            /**
             * corresponds to GdkFrameClock::update.
             */
            UPDATE,
            /**
             * corresponds to GdkFrameClock::layout.
             */
            LAYOUT,
            /**
             * corresponds to GdkFrameClock::paint.
             */
            PAINT,
            /**
             * corresponds to GdkFrameClock::resume-events. Should not be handled by applications.
             */
            RESUME_EVENTS,
            /**
             * corresponds to GdkFrameClock::after-paint. Should not be handled by applications.
             */
            AFTER_PAINT,
        }
        /**
         * A set of bit-flags to indicate the state of modifier keys and mouse buttons
         * in various event types. Typical modifier keys are Shift, Control, Meta,
         * Super, Hyper, Alt, Compose, Apple, CapsLock or ShiftLock.
         *
         * Like the X Window System, GDK supports 8 modifier keys and 5 mouse buttons.
         *
         * Since 2.10, GDK recognizes which of the Meta, Super or Hyper keys are mapped
         * to Mod2 - Mod5, and indicates this by setting %GDK_SUPER_MASK,
         * %GDK_HYPER_MASK or %GDK_META_MASK in the state field of key events.
         *
         * Note that GDK may add internal values to events which include
         * reserved values such as %GDK_MODIFIER_RESERVED_13_MASK.  Your code
         * should preserve and ignore them.  You can use %GDK_MODIFIER_MASK to
         * remove all reserved values.
         *
         * Also note that the GDK X backend interprets button press events for button
         * 4-7 as scroll events, so %GDK_BUTTON4_MASK and %GDK_BUTTON5_MASK will never
         * be set.
         */

        /**
         * A set of bit-flags to indicate the state of modifier keys and mouse buttons
         * in various event types. Typical modifier keys are Shift, Control, Meta,
         * Super, Hyper, Alt, Compose, Apple, CapsLock or ShiftLock.
         *
         * Like the X Window System, GDK supports 8 modifier keys and 5 mouse buttons.
         *
         * Since 2.10, GDK recognizes which of the Meta, Super or Hyper keys are mapped
         * to Mod2 - Mod5, and indicates this by setting %GDK_SUPER_MASK,
         * %GDK_HYPER_MASK or %GDK_META_MASK in the state field of key events.
         *
         * Note that GDK may add internal values to events which include
         * reserved values such as %GDK_MODIFIER_RESERVED_13_MASK.  Your code
         * should preserve and ignore them.  You can use %GDK_MODIFIER_MASK to
         * remove all reserved values.
         *
         * Also note that the GDK X backend interprets button press events for button
         * 4-7 as scroll events, so %GDK_BUTTON4_MASK and %GDK_BUTTON5_MASK will never
         * be set.
         */
        export namespace ModifierType {
            export const $gtype: GObject.GType<ModifierType>;
        }

        enum ModifierType {
            /**
             * the Shift key.
             */
            SHIFT_MASK,
            /**
             * a Lock key (depending on the modifier mapping of the
             *  X server this may either be CapsLock or ShiftLock).
             */
            LOCK_MASK,
            /**
             * the Control key.
             */
            CONTROL_MASK,
            /**
             * the fourth modifier key (it depends on the modifier
             *  mapping of the X server which key is interpreted as this modifier, but
             *  normally it is the Alt key).
             */
            MOD1_MASK,
            /**
             * the fifth modifier key (it depends on the modifier
             *  mapping of the X server which key is interpreted as this modifier).
             */
            MOD2_MASK,
            /**
             * the sixth modifier key (it depends on the modifier
             *  mapping of the X server which key is interpreted as this modifier).
             */
            MOD3_MASK,
            /**
             * the seventh modifier key (it depends on the modifier
             *  mapping of the X server which key is interpreted as this modifier).
             */
            MOD4_MASK,
            /**
             * the eighth modifier key (it depends on the modifier
             *  mapping of the X server which key is interpreted as this modifier).
             */
            MOD5_MASK,
            /**
             * the first mouse button.
             */
            BUTTON1_MASK,
            /**
             * the second mouse button.
             */
            BUTTON2_MASK,
            /**
             * the third mouse button.
             */
            BUTTON3_MASK,
            /**
             * the fourth mouse button.
             */
            BUTTON4_MASK,
            /**
             * the fifth mouse button.
             */
            BUTTON5_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_13_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_14_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_15_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_16_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_17_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_18_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_19_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_20_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_21_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_22_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_23_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_24_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_25_MASK,
            /**
             * the Super modifier. Since 2.10
             */
            SUPER_MASK,
            /**
             * the Hyper modifier. Since 2.10
             */
            HYPER_MASK,
            /**
             * the Meta modifier. Since 2.10
             */
            META_MASK,
            /**
             * A reserved bit flag; do not use in your own code
             */
            MODIFIER_RESERVED_29_MASK,
            /**
             * not used in GDK itself. GTK+ uses it to differentiate
             *  between (keyval, modifiers) pairs from key press and release events.
             */
            RELEASE_MASK,
            /**
             * a mask covering all modifier types.
             */
            MODIFIER_MASK,
        }
        /**
         * Flags describing the seat capabilities.
         */

        /**
         * Flags describing the seat capabilities.
         */
        export namespace SeatCapabilities {
            export const $gtype: GObject.GType<SeatCapabilities>;
        }

        enum SeatCapabilities {
            /**
             * No input capabilities
             */
            NONE,
            /**
             * The seat has a pointer (e.g. mouse)
             */
            POINTER,
            /**
             * The seat has touchscreen(s) attached
             */
            TOUCH,
            /**
             * The seat has drawing tablet(s) attached
             */
            TABLET_STYLUS,
            /**
             * The seat has keyboard(s) attached
             */
            KEYBOARD,
            /**
             * The union of all pointing capabilities
             */
            ALL_POINTING,
            /**
             * The union of all capabilities
             */
            ALL,
        }
        /**
         * These are hints originally defined by the Motif toolkit.
         * The window manager can use them when determining how to decorate
         * the window. The hint must be set before mapping the window.
         */

        /**
         * These are hints originally defined by the Motif toolkit.
         * The window manager can use them when determining how to decorate
         * the window. The hint must be set before mapping the window.
         */
        export namespace WMDecoration {
            export const $gtype: GObject.GType<WMDecoration>;
        }

        enum WMDecoration {
            /**
             * all decorations should be applied.
             */
            ALL,
            /**
             * a frame should be drawn around the window.
             */
            BORDER,
            /**
             * the frame should have resize handles.
             */
            RESIZEH,
            /**
             * a titlebar should be placed above the window.
             */
            TITLE,
            /**
             * a button for opening a menu should be included.
             */
            MENU,
            /**
             * a minimize button should be included.
             */
            MINIMIZE,
            /**
             * a maximize button should be included.
             */
            MAXIMIZE,
        }
        /**
         * These are hints originally defined by the Motif toolkit. The window manager
         * can use them when determining the functions to offer for the window. The
         * hint must be set before mapping the window.
         */

        /**
         * These are hints originally defined by the Motif toolkit. The window manager
         * can use them when determining the functions to offer for the window. The
         * hint must be set before mapping the window.
         */
        export namespace WMFunction {
            export const $gtype: GObject.GType<WMFunction>;
        }

        enum WMFunction {
            /**
             * all functions should be offered.
             */
            ALL,
            /**
             * the window should be resizable.
             */
            RESIZE,
            /**
             * the window should be movable.
             */
            MOVE,
            /**
             * the window should be minimizable.
             */
            MINIMIZE,
            /**
             * the window should be maximizable.
             */
            MAXIMIZE,
            /**
             * the window should be closable.
             */
            CLOSE,
        }
        /**
         * Used to indicate which fields in the #GdkWindowAttr struct should be honored.
         * For example, if you filled in the “cursor” and “x” fields of #GdkWindowAttr,
         * pass “`GDK_WA_X` | `GDK_WA_CURSOR”` to gdk_window_new(). Fields in
         * #GdkWindowAttr not covered by a bit in this enum are required; for example,
         * the `width/``height,` `wclass,` and `window_type` fields are required, they have
         * no corresponding flag in #GdkWindowAttributesType.
         */

        /**
         * Used to indicate which fields in the #GdkWindowAttr struct should be honored.
         * For example, if you filled in the “cursor” and “x” fields of #GdkWindowAttr,
         * pass “`GDK_WA_X` | `GDK_WA_CURSOR”` to gdk_window_new(). Fields in
         * #GdkWindowAttr not covered by a bit in this enum are required; for example,
         * the `width/``height,` `wclass,` and `window_type` fields are required, they have
         * no corresponding flag in #GdkWindowAttributesType.
         */
        export namespace WindowAttributesType {
            export const $gtype: GObject.GType<WindowAttributesType>;
        }

        enum WindowAttributesType {
            /**
             * Honor the title field
             */
            TITLE,
            /**
             * Honor the X coordinate field
             */
            X,
            /**
             * Honor the Y coordinate field
             */
            Y,
            /**
             * Honor the cursor field
             */
            CURSOR,
            /**
             * Honor the visual field
             */
            VISUAL,
            /**
             * Honor the wmclass_class and wmclass_name fields
             */
            WMCLASS,
            /**
             * Honor the override_redirect field
             */
            NOREDIR,
            /**
             * Honor the type_hint field
             */
            TYPE_HINT,
        }
        /**
         * Used to indicate which fields of a #GdkGeometry struct should be paid
         * attention to. Also, the presence/absence of `GDK_HINT_POS,`
         * `GDK_HINT_USER_POS,` and `GDK_HINT_USER_SIZE` is significant, though they don't
         * directly refer to #GdkGeometry fields. `GDK_HINT_USER_POS` will be set
         * automatically by #GtkWindow if you call gtk_window_move().
         * `GDK_HINT_USER_POS` and `GDK_HINT_USER_SIZE` should be set if the user
         * specified a size/position using a --geometry command-line argument;
         * gtk_window_parse_geometry() automatically sets these flags.
         */

        /**
         * Used to indicate which fields of a #GdkGeometry struct should be paid
         * attention to. Also, the presence/absence of `GDK_HINT_POS,`
         * `GDK_HINT_USER_POS,` and `GDK_HINT_USER_SIZE` is significant, though they don't
         * directly refer to #GdkGeometry fields. `GDK_HINT_USER_POS` will be set
         * automatically by #GtkWindow if you call gtk_window_move().
         * `GDK_HINT_USER_POS` and `GDK_HINT_USER_SIZE` should be set if the user
         * specified a size/position using a --geometry command-line argument;
         * gtk_window_parse_geometry() automatically sets these flags.
         */
        export namespace WindowHints {
            export const $gtype: GObject.GType<WindowHints>;
        }

        enum WindowHints {
            /**
             * indicates that the program has positioned the window
             */
            POS,
            /**
             * min size fields are set
             */
            MIN_SIZE,
            /**
             * max size fields are set
             */
            MAX_SIZE,
            /**
             * base size fields are set
             */
            BASE_SIZE,
            /**
             * aspect ratio fields are set
             */
            ASPECT,
            /**
             * resize increment fields are set
             */
            RESIZE_INC,
            /**
             * window gravity field is set
             */
            WIN_GRAVITY,
            /**
             * indicates that the window’s position was explicitly set
             *  by the user
             */
            USER_POS,
            /**
             * indicates that the window’s size was explicitly set by
             *  the user
             */
            USER_SIZE,
        }
        /**
         * Specifies the state of a toplevel window.
         */

        /**
         * Specifies the state of a toplevel window.
         */
        export namespace WindowState {
            export const $gtype: GObject.GType<WindowState>;
        }

        enum WindowState {
            /**
             * the window is not shown.
             */
            WITHDRAWN,
            /**
             * the window is minimized.
             */
            ICONIFIED,
            /**
             * the window is maximized.
             */
            MAXIMIZED,
            /**
             * the window is sticky.
             */
            STICKY,
            /**
             * the window is maximized without
             *   decorations.
             */
            FULLSCREEN,
            /**
             * the window is kept above other windows.
             */
            ABOVE,
            /**
             * the window is kept below other windows.
             */
            BELOW,
            /**
             * the window is presented as focused (with active decorations).
             */
            FOCUSED,
            /**
             * the window is in a tiled state, Since 3.10. Since 3.22.23, this
             *                          is deprecated in favor of per-edge information.
             */
            TILED,
            /**
             * whether the top edge is tiled, Since 3.22.23
             */
            TOP_TILED,
            /**
             * whether the top edge is resizable, Since 3.22.23
             */
            TOP_RESIZABLE,
            /**
             * whether the right edge is tiled, Since 3.22.23
             */
            RIGHT_TILED,
            /**
             * whether the right edge is resizable, Since 3.22.23
             */
            RIGHT_RESIZABLE,
            /**
             * whether the bottom edge is tiled, Since 3.22.23
             */
            BOTTOM_TILED,
            /**
             * whether the bottom edge is resizable, Since 3.22.23
             */
            BOTTOM_RESIZABLE,
            /**
             * whether the left edge is tiled, Since 3.22.23
             */
            LEFT_TILED,
            /**
             * whether the left edge is resizable, Since 3.22.23
             */
            LEFT_RESIZABLE,
        }
        namespace AppLaunchContext {
            // Signal signatures
            interface SignalSignatures extends Gio.AppLaunchContext.SignalSignatures {
                'notify::display': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gio.AppLaunchContext.ConstructorProps {
                display: Display;
            }
        }

        /**
         * GdkAppLaunchContext is an implementation of #GAppLaunchContext that
         * handles launching an application in a graphical context. It provides
         * startup notification and allows to launch applications on a specific
         * screen or workspace.
         *
         * ## Launching an application
         *
         *
         * ```c
         * GdkAppLaunchContext *context;
         *
         * context = gdk_display_get_app_launch_context (display);
         *
         * gdk_app_launch_context_set_screen (screen);
         * gdk_app_launch_context_set_timestamp (event->time);
         *
         * if (!g_app_info_launch_default_for_uri ("http://www.gtk.org", context, &error))
         *   g_warning ("Launching failed: %s\n", error->message);
         *
         * g_object_unref (context);
         * ```
         *
         */
        class AppLaunchContext extends Gio.AppLaunchContext {
            static $gtype: GObject.GType<AppLaunchContext>;

            // Properties

            get display(): Display;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: AppLaunchContext.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<AppLaunchContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): AppLaunchContext;

            // Signals

            connect<K extends keyof AppLaunchContext.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, AppLaunchContext.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof AppLaunchContext.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, AppLaunchContext.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof AppLaunchContext.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<AppLaunchContext.SignalSignatures[K]> extends [any, ...infer Q]
                    ? Q
                    : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Sets the workspace on which applications will be launched when
             * using this context when running under a window manager that
             * supports multiple workspaces, as described in the
             * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
             *
             * When the workspace is not specified or `desktop` is set to -1,
             * it is up to the window manager to pick one, typically it will
             * be the current workspace.
             * @param desktop the number of a workspace, or -1
             */
            set_desktop(desktop: number): void;
            /**
             * Sets the display on which applications will be launched when
             * using this context. See also gdk_app_launch_context_set_screen().
             * @param display a #GdkDisplay
             */
            set_display(display: Display): void;
            /**
             * Sets the icon for applications that are launched with this
             * context.
             *
             * Window Managers can use this information when displaying startup
             * notification.
             *
             * See also gdk_app_launch_context_set_icon_name().
             * @param icon a #GIcon, or %NULL
             */
            set_icon(icon?: Gio.Icon | null): void;
            /**
             * Sets the icon for applications that are launched with this context.
             * The `icon_name` will be interpreted in the same way as the Icon field
             * in desktop files. See also gdk_app_launch_context_set_icon().
             *
             * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
             * If neither `icon` or `icon_name` is set, the icon is taken from either
             * the file that is passed to launched application or from the #GAppInfo
             * for the launched application itself.
             * @param icon_name an icon name, or %NULL
             */
            set_icon_name(icon_name?: string | null): void;
            /**
             * Sets the screen on which applications will be launched when
             * using this context. See also gdk_app_launch_context_set_display().
             *
             * Note that, typically, a #GdkScreen represents a logical screen,
             * not a physical monitor.
             *
             * If both `screen` and `display` are set, the `screen` takes priority.
             * If neither `screen` or `display` are set, the default screen and
             * display are used.
             * @param screen a #GdkScreen
             */
            set_screen(screen: Screen): void;
            /**
             * Sets the timestamp of `context`. The timestamp should ideally
             * be taken from the event that triggered the launch.
             *
             * Window managers can use this information to avoid moving the
             * focus to the newly launched application when the user is busy
             * typing in another window. This is also known as 'focus stealing
             * prevention'.
             * @param timestamp a timestamp
             */
            set_timestamp(timestamp: number): void;
        }

        namespace Cursor {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'notify::cursor-type': (pspec: GObject.ParamSpec) => void;
                'notify::display': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                cursor_type: CursorType;
                cursorType: CursorType;
                display: Display;
            }
        }

        /**
         * A #GdkCursor represents a cursor. Its contents are private.
         */
        abstract class Cursor extends GObject.Object {
            static $gtype: GObject.GType<Cursor>;

            // Properties

            get cursor_type(): CursorType;
            get cursorType(): CursorType;
            get display(): Display;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Cursor.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Cursor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](cursor_type: CursorType): Cursor;

            static new_for_display(display: Display, cursor_type: CursorType): Cursor;

            static new_from_name(display: Display, name: string): Cursor;

            static new_from_pixbuf(display: Display, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): Cursor;

            static new_from_surface(display: Display, surface: cairo.Surface, x: number, y: number): Cursor;

            // Signals

            connect<K extends keyof Cursor.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Cursor.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Cursor.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Cursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Returns the cursor type for this cursor.
             * @returns a #GdkCursorType
             */
            get_cursor_type(): CursorType;
            /**
             * Returns the display on which the #GdkCursor is defined.
             * @returns the #GdkDisplay associated to @cursor
             */
            get_display(): Display;
            /**
             * Returns a #GdkPixbuf with the image used to display the cursor.
             *
             * Note that depending on the capabilities of the windowing system and
             * on the cursor, GDK may not be able to obtain the image data. In this
             * case, %NULL is returned.
             * @returns a #GdkPixbuf representing   @cursor, or %NULL
             */
            get_image(): GdkPixbuf.Pixbuf | null;
            /**
             * Returns a cairo image surface with the image used to display the cursor.
             *
             * Note that depending on the capabilities of the windowing system and
             * on the cursor, GDK may not be able to obtain the image data. In this
             * case, %NULL is returned.
             * @returns a #cairo_surface_t   representing @cursor, or %NULL
             */
            get_surface(): [cairo.Surface | null, number, number];
            /**
             * Adds a reference to `cursor`.
             * @returns Same @cursor that was passed in
             */
            ref(): Cursor;
            /**
             * Removes a reference from `cursor,` deallocating the cursor
             * if no references remain.
             */
            unref(): void;
        }

        namespace Device {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                changed: () => void;
                'tool-changed': (arg0: DeviceTool) => void;
                'notify::associated-device': (pspec: GObject.ParamSpec) => void;
                'notify::axes': (pspec: GObject.ParamSpec) => void;
                'notify::device-manager': (pspec: GObject.ParamSpec) => void;
                'notify::display': (pspec: GObject.ParamSpec) => void;
                'notify::has-cursor': (pspec: GObject.ParamSpec) => void;
                'notify::input-mode': (pspec: GObject.ParamSpec) => void;
                'notify::input-source': (pspec: GObject.ParamSpec) => void;
                'notify::n-axes': (pspec: GObject.ParamSpec) => void;
                'notify::name': (pspec: GObject.ParamSpec) => void;
                'notify::num-touches': (pspec: GObject.ParamSpec) => void;
                'notify::product-id': (pspec: GObject.ParamSpec) => void;
                'notify::seat': (pspec: GObject.ParamSpec) => void;
                'notify::tool': (pspec: GObject.ParamSpec) => void;
                'notify::type': (pspec: GObject.ParamSpec) => void;
                'notify::vendor-id': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                associated_device: Device;
                associatedDevice: Device;
                axes: AxisFlags;
                device_manager: DeviceManager;
                deviceManager: DeviceManager;
                display: Display;
                has_cursor: boolean;
                hasCursor: boolean;
                input_mode: InputMode;
                inputMode: InputMode;
                input_source: InputSource;
                inputSource: InputSource;
                n_axes: number;
                nAxes: number;
                name: string;
                num_touches: number;
                numTouches: number;
                product_id: string;
                productId: string;
                seat: Seat;
                tool: DeviceTool;
                type: DeviceType;
                vendor_id: string;
                vendorId: string;
            }
        }

        /**
         * The #GdkDevice object represents a single input device, such
         * as a keyboard, a mouse, a touchpad, etc.
         *
         * See the #GdkDeviceManager documentation for more information
         * about the various kinds of master and slave devices, and their
         * relationships.
         */
        abstract class Device extends GObject.Object {
            static $gtype: GObject.GType<Device>;

            // Properties

            /**
             * Associated pointer or keyboard with this device, if any. Devices of type #GDK_DEVICE_TYPE_MASTER
             * always come in keyboard/pointer pairs. Other device types will have a %NULL associated device.
             */
            get associated_device(): Device;
            /**
             * Associated pointer or keyboard with this device, if any. Devices of type #GDK_DEVICE_TYPE_MASTER
             * always come in keyboard/pointer pairs. Other device types will have a %NULL associated device.
             */
            get associatedDevice(): Device;
            /**
             * The axes currently available for this device.
             */
            get axes(): AxisFlags;
            /**
             * The #GdkDeviceManager the #GdkDevice pertains to.
             */
            get device_manager(): DeviceManager;
            /**
             * The #GdkDeviceManager the #GdkDevice pertains to.
             */
            get deviceManager(): DeviceManager;
            /**
             * The #GdkDisplay the #GdkDevice pertains to.
             */
            get display(): Display;
            /**
             * Whether the device is represented by a cursor on the screen. Devices of type
             * %GDK_DEVICE_TYPE_MASTER will have %TRUE here.
             */
            get has_cursor(): boolean;
            /**
             * Whether the device is represented by a cursor on the screen. Devices of type
             * %GDK_DEVICE_TYPE_MASTER will have %TRUE here.
             */
            get hasCursor(): boolean;
            get input_mode(): InputMode;
            set input_mode(val: InputMode);
            get inputMode(): InputMode;
            set inputMode(val: InputMode);
            /**
             * Source type for the device.
             */
            get input_source(): InputSource;
            /**
             * Source type for the device.
             */
            get inputSource(): InputSource;
            /**
             * Number of axes in the device.
             */
            get n_axes(): number;
            /**
             * Number of axes in the device.
             */
            get nAxes(): number;
            /**
             * The device name.
             */
            get name(): string;
            /**
             * The maximal number of concurrent touches on a touch device.
             * Will be 0 if the device is not a touch device or if the number
             * of touches is unknown.
             */
            get num_touches(): number;
            /**
             * The maximal number of concurrent touches on a touch device.
             * Will be 0 if the device is not a touch device or if the number
             * of touches is unknown.
             */
            get numTouches(): number;
            /**
             * Product ID of this device, see gdk_device_get_product_id().
             */
            get product_id(): string;
            /**
             * Product ID of this device, see gdk_device_get_product_id().
             */
            get productId(): string;
            /**
             * #GdkSeat of this device.
             */
            get seat(): Seat;
            set seat(val: Seat);
            get tool(): DeviceTool;
            /**
             * Device role in the device manager.
             */
            get type(): DeviceType;
            /**
             * Vendor ID of this device, see gdk_device_get_vendor_id().
             */
            get vendor_id(): string;
            /**
             * Vendor ID of this device, see gdk_device_get_vendor_id().
             */
            get vendorId(): string;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Device.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Device.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Device.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Device.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Static methods

            /**
             * Determines information about the current keyboard grab.
             * This is not public API and must not be used by applications.
             * @param display the display for which to get the grab information
             * @param device device to get the grab information from
             */
            static grab_info_libgtk_only(display: Display, device: Device): [boolean, Window, boolean];

            // Methods

            /**
             * Returns the associated device to `device,` if `device` is of type
             * %GDK_DEVICE_TYPE_MASTER, it will return the paired pointer or
             * keyboard.
             *
             * If `device` is of type %GDK_DEVICE_TYPE_SLAVE, it will return
             * the master device to which `device` is attached to.
             *
             * If `device` is of type %GDK_DEVICE_TYPE_FLOATING, %NULL will be
             * returned, as there is no associated device.
             * @returns The associated device, or   %NULL
             */
            get_associated_device(): Device | null;
            /**
             * Returns the axes currently available on the device.
             */
            get_axes(): AxisFlags;
            /**
             * Returns the axis use for `index_`.
             * @param index_ the index of the axis.
             * @returns a #GdkAxisUse specifying how the axis is used.
             */
            get_axis_use(index_: number): AxisUse;
            /**
             * Returns the device type for `device`.
             * @returns the #GdkDeviceType for @device.
             */
            get_device_type(): DeviceType;
            /**
             * Returns the #GdkDisplay to which `device` pertains.
             * @returns a #GdkDisplay. This memory is owned          by GTK+, and must not be freed or unreffed.
             */
            get_display(): Display;
            /**
             * Determines whether the pointer follows device motion.
             * This is not meaningful for keyboard devices, which don't have a pointer.
             * @returns %TRUE if the pointer follows device motion
             */
            get_has_cursor(): boolean;
            /**
             * If `index_` has a valid keyval, this function will return %TRUE
             * and fill in `keyval` and `modifiers` with the keyval settings.
             * @param index_ the index of the macro button to get.
             * @returns %TRUE if keyval is set for @index.
             */
            get_key(index_: number): [boolean, number, ModifierType];
            /**
             * Gets information about which window the given pointer device is in, based on events
             * that have been received so far from the display server. If another application
             * has a pointer grab, or this application has a grab with owner_events = %FALSE,
             * %NULL may be returned even if the pointer is physically over one of this
             * application's windows.
             * @returns the last window the device
             */
            get_last_event_window(): Window | null;
            /**
             * Determines the mode of the device.
             * @returns a #GdkInputSource
             */
            get_mode(): InputMode;
            /**
             * Returns the number of axes the device currently has.
             * @returns the number of axes.
             */
            get_n_axes(): number;
            /**
             * Returns the number of keys the device currently has.
             * @returns the number of keys.
             */
            get_n_keys(): number;
            /**
             * Determines the name of the device.
             * @returns a name
             */
            get_name(): string;
            /**
             * Gets the current location of `device`. As a slave device
             * coordinates are those of its master pointer, This function
             * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
             * unless there is an ongoing grab on them, see gdk_device_grab().
             */
            get_position(): [Screen | null, number, number];
            /**
             * Gets the current location of `device` in double precision. As a slave device's
             * coordinates are those of its master pointer, this function
             * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
             * unless there is an ongoing grab on them. See gdk_device_grab().
             */
            get_position_double(): [Screen | null, number, number];
            /**
             * Returns the product ID of this device, or %NULL if this information couldn't
             * be obtained. This ID is retrieved from the device, and is thus constant for
             * it. See gdk_device_get_vendor_id() for more information.
             * @returns the product ID, or %NULL
             */
            get_product_id(): string | null;
            /**
             * Returns the #GdkSeat the device belongs to.
             * @returns A #GdkSeat. This memory is owned by GTK+ and          must not be freed.
             */
            get_seat(): Seat;
            /**
             * Determines the type of the device.
             * @returns a #GdkInputSource
             */
            get_source(): InputSource;
            /**
             * Returns the vendor ID of this device, or %NULL if this information couldn't
             * be obtained. This ID is retrieved from the device, and is thus constant for
             * it.
             *
             * This function, together with gdk_device_get_product_id(), can be used to eg.
             * compose #GSettings paths to store settings for this device.
             *
             *
             * ```c
             *  static GSettings *
             *  get_device_settings (GdkDevice *device)
             *  {
             *    const gchar *vendor, *product;
             *    GSettings *settings;
             *    GdkDevice *device;
             *    gchar *path;
             *
             *    vendor = gdk_device_get_vendor_id (device);
             *    product = gdk_device_get_product_id (device);
             *
             *    path = g_strdup_printf ("/org/example/app/devices/%s:%s/", vendor, product);
             *    settings = g_settings_new_with_path (DEVICE_SCHEMA, path);
             *    g_free (path);
             *
             *    return settings;
             *  }
             * ```
             *
             * @returns the vendor ID, or %NULL
             */
            get_vendor_id(): string | null;
            /**
             * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y`. Returns
             * %NULL if the window tree under `device` is not known to GDK (for example, belongs to another application).
             *
             * As a slave device coordinates are those of its master pointer, This
             * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
             * unless there is an ongoing grab on them, see gdk_device_grab().
             * @returns the #GdkWindow under the device position, or %NULL.
             */
            get_window_at_position(): [Window | null, number, number];
            /**
             * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y` in
             * double precision. Returns %NULL if the window tree under `device` is not known to GDK (for example,
             * belongs to another application).
             *
             * As a slave device coordinates are those of its master pointer, This
             * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
             * unless there is an ongoing grab on them, see gdk_device_grab().
             * @returns the #GdkWindow under the   device position, or %NULL.
             */
            get_window_at_position_double(): [Window | null, number, number];
            /**
             * Grabs the device so that all events coming from this device are passed to
             * this application until the device is ungrabbed with gdk_device_ungrab(),
             * or the window becomes unviewable. This overrides any previous grab on the device
             * by this client.
             *
             * Note that `device` and `window` need to be on the same display.
             *
             * Device grabs are used for operations which need complete control over the
             * given device events (either pointer or keyboard). For example in GTK+ this
             * is used for Drag and Drop operations, popup menus and such.
             *
             * Note that if the event mask of an X window has selected both button press
             * and button release events, then a button press event will cause an automatic
             * pointer grab until the button is released. X does this automatically since
             * most applications expect to receive button press and release events in pairs.
             * It is equivalent to a pointer grab on the window with `owner_events` set to
             * %TRUE.
             *
             * If you set up anything at the time you take the grab that needs to be
             * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
             * events that are emitted when the grab ends unvoluntarily.
             * @param window the #GdkWindow which will own the grab (the grab window)
             * @param grab_ownership specifies the grab ownership.
             * @param owner_events if %FALSE then all device events are reported with respect to                @window and are only reported if selected by @event_mask. If                %TRUE then pointer events for this application are reported                as normal, but pointer events outside this application are                reported with respect to @window and only if selected by                @event_mask. In either mode, unreported events are discarded.
             * @param event_mask specifies the event mask, which is used in accordance with              @owner_events.
             * @param cursor the cursor to display while the grab is active if the device is          a pointer. If this is %NULL then the normal cursors are used for          @window and its descendants, and the cursor for @window is used          elsewhere.
             * @param time_ the timestamp of the event which led to this pointer grab. This         usually comes from the #GdkEvent struct, though %GDK_CURRENT_TIME         can be used if the time isn’t known.
             * @returns %GDK_GRAB_SUCCESS if the grab was successful.
             */
            grab(
                window: Window,
                grab_ownership: GrabOwnership | null,
                owner_events: boolean,
                event_mask: EventMask | null,
                cursor: Cursor | null,
                time_: number,
            ): GrabStatus;
            /**
             * Returns a #GList of #GdkAtoms, containing the labels for
             * the axes that `device` currently has.
             * @returns A #GList of #GdkAtoms, free with g_list_free().
             */
            list_axes(): Atom[];
            /**
             * If the device if of type %GDK_DEVICE_TYPE_MASTER, it will return
             * the list of slave devices attached to it, otherwise it will return
             * %NULL
             * @returns the list of slave devices, or %NULL. The list must be          freed with g_list_free(), the contents of the list are          owned by GTK+ and should not be freed.
             */
            list_slave_devices(): Device[] | null;
            /**
             * Specifies how an axis of a device is used.
             * @param index_ the index of the axis
             * @param use specifies how the axis is used
             */
            set_axis_use(index_: number, use: AxisUse | null): void;
            /**
             * Specifies the X key event to generate when a macro button of a device
             * is pressed.
             * @param index_ the index of the macro button to set
             * @param keyval the keyval to generate
             * @param modifiers the modifiers to set
             */
            set_key(index_: number, keyval: number, modifiers: ModifierType | null): void;
            /**
             * Sets a the mode of an input device. The mode controls if the
             * device is active and whether the device’s range is mapped to the
             * entire screen or to a single window.
             *
             * Note: This is only meaningful for floating devices, master devices (and
             * slaves connected to these) drive the pointer cursor, which is not limited
             * by the input mode.
             * @param mode the input mode.
             * @returns %TRUE if the mode was successfully changed.
             */
            set_mode(mode: InputMode | null): boolean;
            /**
             * Release any grab on `device`.
             * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
             */
            ungrab(time_: number): void;
            /**
             * Warps `device` in `display` to the point `x,``y` on
             * the screen `screen,` unless the device is confined
             * to a window by a grab, in which case it will be moved
             * as far as allowed by the grab. Warping the pointer
             * creates events as if the user had moved the mouse
             * instantaneously to the destination.
             *
             * Note that the pointer should normally be under the
             * control of the user. This function was added to cover
             * some rare use cases like keyboard navigation support
             * for the color picker in the #GtkColorSelectionDialog.
             * @param screen the screen to warp @device to.
             * @param x the X coordinate of the destination.
             * @param y the Y coordinate of the destination.
             */
            warp(screen: Screen, x: number, y: number): void;
        }

        namespace DeviceManager {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'device-added': (arg0: Device) => void;
                'device-changed': (arg0: Device) => void;
                'device-removed': (arg0: Device) => void;
                'notify::display': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                display: Display;
            }
        }

        /**
         * In addition to a single pointer and keyboard for user interface input,
         * GDK contains support for a variety of input devices, including graphics
         * tablets, touchscreens and multiple pointers/keyboards interacting
         * simultaneously with the user interface. Such input devices often have
         * additional features, such as sub-pixel positioning information and
         * additional device-dependent information.
         *
         * In order to query the device hierarchy and be aware of changes in the
         * device hierarchy (such as virtual devices being created or removed, or
         * physical devices being plugged or unplugged), GDK provides
         * #GdkDeviceManager.
         *
         * By default, and if the platform supports it, GDK is aware of multiple
         * keyboard/pointer pairs and multitouch devices. This behavior can be
         * changed by calling gdk_disable_multidevice() before gdk_display_open().
         * There should rarely be a need to do that though, since GDK defaults
         * to a compatibility mode in which it will emit just one enter/leave
         * event pair for all devices on a window. To enable per-device
         * enter/leave events and other multi-pointer interaction features,
         * gdk_window_set_support_multidevice() must be called on
         * #GdkWindows (or gtk_widget_set_support_multidevice() on widgets).
         * window. See the gdk_window_set_support_multidevice() documentation
         * for more information.
         *
         * On X11, multi-device support is implemented through XInput 2.
         * Unless gdk_disable_multidevice() is called, the XInput 2
         * #GdkDeviceManager implementation will be used as the input source.
         * Otherwise either the core or XInput 1 implementations will be used.
         *
         * For simple applications that don’t have any special interest in
         * input devices, the so-called “client pointer”
         * provides a reasonable approximation to a simple setup with a single
         * pointer and keyboard. The device that has been set as the client
         * pointer can be accessed via gdk_device_manager_get_client_pointer().
         *
         * Conceptually, in multidevice mode there are 2 device types. Virtual
         * devices (or master devices) are represented by the pointer cursors
         * and keyboard foci that are seen on the screen. Physical devices (or
         * slave devices) represent the hardware that is controlling the virtual
         * devices, and thus have no visible cursor on the screen.
         *
         * Virtual devices are always paired, so there is a keyboard device for every
         * pointer device. Associations between devices may be inspected through
         * gdk_device_get_associated_device().
         *
         * There may be several virtual devices, and several physical devices could
         * be controlling each of these virtual devices. Physical devices may also
         * be “floating”, which means they are not attached to any virtual device.
         *
         * # Master and slave devices
         *
         *
         * ```
         * carlos`sacarino:`~$ xinput list
         * ⎡ Virtual core pointer                          id=2    [master pointer  (3)]
         * ⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
         * ⎜   ↳ Wacom ISDv4 E6 Pen stylus                 id=10   [slave  pointer  (2)]
         * ⎜   ↳ Wacom ISDv4 E6 Finger touch               id=11   [slave  pointer  (2)]
         * ⎜   ↳ SynPS/2 Synaptics TouchPad                id=13   [slave  pointer  (2)]
         * ⎜   ↳ TPPS/2 IBM TrackPoint                     id=14   [slave  pointer  (2)]
         * ⎜   ↳ Wacom ISDv4 E6 Pen eraser                 id=16   [slave  pointer  (2)]
         * ⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
         *     ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
         *     ↳ Power Button                              id=6    [slave  keyboard (3)]
         *     ↳ Video Bus                                 id=7    [slave  keyboard (3)]
         *     ↳ Sleep Button                              id=8    [slave  keyboard (3)]
         *     ↳ Integrated Camera                         id=9    [slave  keyboard (3)]
         *     ↳ AT Translated Set 2 keyboard              id=12   [slave  keyboard (3)]
         *     ↳ ThinkPad Extra Buttons                    id=15   [slave  keyboard (3)]
         * ```
         *
         *
         * By default, GDK will automatically listen for events coming from all
         * master devices, setting the #GdkDevice for all events coming from input
         * devices. Events containing device information are #GDK_MOTION_NOTIFY,
         * #GDK_BUTTON_PRESS, #GDK_2BUTTON_PRESS, #GDK_3BUTTON_PRESS,
         * #GDK_BUTTON_RELEASE, #GDK_SCROLL, #GDK_KEY_PRESS, #GDK_KEY_RELEASE,
         * #GDK_ENTER_NOTIFY, #GDK_LEAVE_NOTIFY, #GDK_FOCUS_CHANGE,
         * #GDK_PROXIMITY_IN, #GDK_PROXIMITY_OUT, #GDK_DRAG_ENTER, #GDK_DRAG_LEAVE,
         * #GDK_DRAG_MOTION, #GDK_DRAG_STATUS, #GDK_DROP_START, #GDK_DROP_FINISHED
         * and #GDK_GRAB_BROKEN. When dealing with an event on a master device,
         * it is possible to get the source (slave) device that the event originated
         * from via gdk_event_get_source_device().
         *
         * On a standard session, all physical devices are connected by default to
         * the "Virtual Core Pointer/Keyboard" master devices, hence routing all events
         * through these. This behavior is only modified by device grabs, where the
         * slave device is temporarily detached for as long as the grab is held, and
         * more permanently by user modifications to the device hierarchy.
         *
         * On certain application specific setups, it may make sense
         * to detach a physical device from its master pointer, and mapping it to
         * an specific window. This can be achieved by the combination of
         * gdk_device_grab() and gdk_device_set_mode().
         *
         * In order to listen for events coming from devices
         * other than a virtual device, gdk_window_set_device_events() must be
         * called. Generally, this function can be used to modify the event mask
         * for any given device.
         *
         * Input devices may also provide additional information besides X/Y.
         * For example, graphics tablets may also provide pressure and X/Y tilt
         * information. This information is device-dependent, and may be
         * queried through gdk_device_get_axis(). In multidevice mode, virtual
         * devices will change axes in order to always represent the physical
         * device that is routing events through it. Whenever the physical device
         * changes, the #GdkDevice:n-axes property will be notified, and
         * gdk_device_list_axes() will return the new device axes.
         *
         * Devices may also have associated “keys” or
         * macro buttons. Such keys can be globally set to map into normal X
         * keyboard events. The mapping is set using gdk_device_set_key().
         *
         * In GTK+ 3.20, a new #GdkSeat object has been introduced that
         * supersedes #GdkDeviceManager and should be preferred in newly
         * written code.
         */
        abstract class DeviceManager extends GObject.Object {
            static $gtype: GObject.GType<DeviceManager>;

            // Properties

            get display(): Display;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: DeviceManager.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<DeviceManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof DeviceManager.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, DeviceManager.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof DeviceManager.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, DeviceManager.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof DeviceManager.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<DeviceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Returns the client pointer, that is, the master pointer that acts as the core pointer
             * for this application. In X11, window managers may change this depending on the interaction
             * pattern under the presence of several pointers.
             *
             * You should use this function seldomly, only in code that isn’t triggered by a #GdkEvent
             * and there aren’t other means to get a meaningful #GdkDevice to operate on.
             * @returns The client pointer. This memory is          owned by GDK and must not be freed or unreferenced.
             */
            get_client_pointer(): Device;
            /**
             * Gets the #GdkDisplay associated to `device_manager`.
             * @returns the #GdkDisplay to which          @device_manager is associated to, or %NULL. This memory is          owned by GDK and must not be freed or unreferenced.
             */
            get_display(): Display | null;
            /**
             * Returns the list of devices of type `type` currently attached to
             * `device_manager`.
             * @param type device type to get.
             * @returns a list of          #GdkDevices. The returned list must be          freed with g_list_free (). The list elements are owned by          GTK+ and must not be freed or unreffed.
             */
            list_devices(type: DeviceType | null): Device[];
        }

        namespace DeviceTool {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'notify::axes': (pspec: GObject.ParamSpec) => void;
                'notify::hardware-id': (pspec: GObject.ParamSpec) => void;
                'notify::serial': (pspec: GObject.ParamSpec) => void;
                'notify::tool-type': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                axes: AxisFlags;
                hardware_id: number;
                hardwareId: number;
                serial: number;
                tool_type: DeviceToolType;
                toolType: DeviceToolType;
            }
        }

        class DeviceTool extends GObject.Object {
            static $gtype: GObject.GType<DeviceTool>;

            // Properties

            get axes(): AxisFlags;
            get hardware_id(): number;
            get hardwareId(): number;
            get serial(): number;
            get tool_type(): DeviceToolType;
            get toolType(): DeviceToolType;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: DeviceTool.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<DeviceTool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof DeviceTool.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, DeviceTool.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof DeviceTool.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, DeviceTool.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof DeviceTool.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<DeviceTool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Gets the hardware ID of this tool, or 0 if it's not known. When
             * non-zero, the identificator is unique for the given tool model,
             * meaning that two identical tools will share the same `hardware_id,`
             * but will have different serial numbers (see gdk_device_tool_get_serial()).
             *
             * This is a more concrete (and device specific) method to identify
             * a #GdkDeviceTool than gdk_device_tool_get_tool_type(), as a tablet
             * may support multiple devices with the same #GdkDeviceToolType,
             * but having different hardware identificators.
             * @returns The hardware identificator of this tool.
             */
            get_hardware_id(): number;
            /**
             * Gets the serial of this tool, this value can be used to identify a
             * physical tool (eg. a tablet pen) across program executions.
             * @returns The serial ID for this tool
             */
            get_serial(): number;
            /**
             * Gets the #GdkDeviceToolType of the tool.
             * @returns The physical type for this tool. This can be used to figure out what sort of pen is being used, such as an airbrush or a pencil.
             */
            get_tool_type(): DeviceToolType;
        }

        namespace Display {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                closed: (arg0: boolean) => void;
                'monitor-added': (arg0: Monitor) => void;
                'monitor-removed': (arg0: Monitor) => void;
                opened: () => void;
                'seat-added': (arg0: Seat) => void;
                'seat-removed': (arg0: Seat) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * #GdkDisplay objects purpose are two fold:
         *
         * - To manage and provide information about input devices (pointers and keyboards)
         *
         * - To manage and provide information about the available #GdkScreens
         *
         * GdkDisplay objects are the GDK representation of an X Display,
         * which can be described as a workstation consisting of
         * a keyboard, a pointing device (such as a mouse) and one or more
         * screens.
         * It is used to open and keep track of various GdkScreen objects
         * currently instantiated by the application. It is also used to
         * access the keyboard(s) and mouse pointer(s) of the display.
         *
         * Most of the input device handling has been factored out into
         * the separate #GdkDeviceManager object. Every display has a
         * device manager, which you can obtain using
         * gdk_display_get_device_manager().
         */
        class Display extends GObject.Object {
            static $gtype: GObject.GType<Display>;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Display.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Display.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Display.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Display.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Static methods

            /**
             * Gets the default #GdkDisplay. This is a convenience
             * function for:
             * `gdk_display_manager_get_default_display (gdk_display_manager_get ())`.
             */
            static get_default(): Display | null;
            /**
             * Opens a display.
             * @param display_name the name of the display to open
             */
            static open(display_name: string): Display | null;
            /**
             * Opens the default display specified by command line arguments or
             * environment variables, sets it as the default display, and returns
             * it. gdk_parse_args() must have been called first. If the default
             * display has previously been set, simply returns that. An internal
             * function that should not be used by applications.
             */
            static open_default_libgtk_only(): Display | null;

            // Methods

            /**
             * Emits a short beep on `display`
             */
            beep(): void;
            /**
             * Closes the connection to the windowing system for the given display,
             * and cleans up associated resources.
             */
            close(): void;
            /**
             * Returns %TRUE if there is an ongoing grab on `device` for `display`.
             * @param device a #GdkDevice
             * @returns %TRUE if there is a grab in effect for @device.
             */
            device_is_grabbed(device: Device): boolean;
            /**
             * Flushes any requests queued for the windowing system; this happens automatically
             * when the main loop blocks waiting for new events, but if your application
             * is drawing without returning control to the main loop, you may need
             * to call this function explicitly. A common case where this function
             * needs to be called is when an application is executing drawing commands
             * from a thread other than the thread where the main loop is running.
             *
             * This is most useful for X11. On windowing systems where requests are
             * handled synchronously, this function will do nothing.
             */
            flush(): void;
            /**
             * Returns a #GdkAppLaunchContext suitable for launching
             * applications on the given display.
             * @returns a new #GdkAppLaunchContext for @display.     Free with g_object_unref() when done
             */
            get_app_launch_context(): AppLaunchContext;
            /**
             * Returns the default size to use for cursors on `display`.
             * @returns the default cursor size.
             */
            get_default_cursor_size(): number;
            /**
             * Returns the default group leader window for all toplevel windows
             * on `display`. This window is implicitly created by GDK.
             * See gdk_window_set_group().
             * @returns The default group leader window for @display
             */
            get_default_group(): Window;
            /**
             * Get the default #GdkScreen for `display`.
             * @returns the default #GdkScreen object for @display
             */
            get_default_screen(): Screen;
            /**
             * Returns the default #GdkSeat for this display.
             * @returns the default seat.
             */
            get_default_seat(): Seat;
            /**
             * Returns the #GdkDeviceManager associated to `display`.
             * @returns A #GdkDeviceManager, or          %NULL. This memory is owned by GDK and must not be freed          or unreferenced.
             */
            get_device_manager(): DeviceManager | null;
            /**
             * Gets the next #GdkEvent to be processed for `display,` fetching events from the
             * windowing system if necessary.
             * @returns the next #GdkEvent to be processed, or %NULL if no events are pending. The returned #GdkEvent should be freed with gdk_event_free().
             */
            get_event(): Event | null;
            /**
             * Gets the maximal size to use for cursors on `display`.
             */
            get_maximal_cursor_size(): [number, number];
            /**
             * Gets a monitor associated with this display.
             * @param monitor_num number of the monitor
             * @returns the #GdkMonitor, or %NULL if    @monitor_num is not a valid monitor number
             */
            get_monitor(monitor_num: number): Monitor | null;
            /**
             * Gets the monitor in which the point (`x,` `y)` is located,
             * or a nearby monitor if the point is not in any monitor.
             * @param x the x coordinate of the point
             * @param y the y coordinate of the point
             * @returns the monitor containing the point
             */
            get_monitor_at_point(x: number, y: number): Monitor;
            /**
             * Gets the monitor in which the largest area of `window`
             * resides, or a monitor close to `window` if it is outside
             * of all monitors.
             * @param window a #GdkWindow
             * @returns the monitor with the largest overlap with @window
             */
            get_monitor_at_window(window: Window): Monitor;
            /**
             * Gets the number of monitors that belong to `display`.
             *
             * The returned number is valid until the next emission of the
             * #GdkDisplay::monitor-added or #GdkDisplay::monitor-removed signal.
             * @returns the number of monitors
             */
            get_n_monitors(): number;
            /**
             * Gets the number of screen managed by the `display`.
             * @returns number of screens.
             */
            get_n_screens(): number;
            /**
             * Gets the name of the display.
             * @returns a string representing the display name. This string is owned by GDK and should not be modified or freed.
             */
            get_name(): string;
            /**
             * Gets the current location of the pointer and the current modifier
             * mask for a given display.
             */
            get_pointer(): [Screen | null, number, number, ModifierType | null];
            /**
             * Gets the primary monitor for the display.
             *
             * The primary monitor is considered the monitor where the “main desktop”
             * lives. While normal application windows typically allow the window
             * manager to place the windows, specialized desktop applications
             * such as panels should place themselves on the primary monitor.
             * @returns the primary monitor, or %NULL if no primary     monitor is configured by the user
             */
            get_primary_monitor(): Monitor | null;
            /**
             * Returns a screen object for one of the screens of the display.
             * @param screen_num the screen number
             * @returns the #GdkScreen object
             */
            get_screen(screen_num: number): Screen;
            /**
             * Obtains the window underneath the mouse pointer, returning the location
             * of the pointer in that window in `win_x,` `win_y` for `screen`. Returns %NULL
             * if the window under the mouse pointer is not known to GDK (for example,
             * belongs to another application).
             * @returns the window under the mouse   pointer, or %NULL
             */
            get_window_at_pointer(): [Window | null, number, number];
            /**
             * Returns whether the display has events that are waiting
             * to be processed.
             * @returns %TRUE if there are events ready to be processed.
             */
            has_pending(): boolean;
            /**
             * Finds out if the display has been closed.
             * @returns %TRUE if the display is closed.
             */
            is_closed(): boolean;
            /**
             * Release any keyboard grab
             * @param time_ a timestap (e.g #GDK_CURRENT_TIME).
             */
            keyboard_ungrab(time_: number): void;
            /**
             * Returns the list of available input devices attached to `display`.
             * The list is statically allocated and should not be freed.
             * @returns a list of #GdkDevice
             */
            list_devices(): Device[];
            /**
             * Returns the list of seats known to `display`.
             * @returns the          list of seats known to the #GdkDisplay
             */
            list_seats(): Seat[];
            /**
             * Indicates to the GUI environment that the application has
             * finished loading, using a given identifier.
             *
             * GTK+ will call this function automatically for #GtkWindow
             * with custom startup-notification identifier unless
             * gtk_window_set_auto_startup_notification() is called to
             * disable that feature.
             * @param startup_id a startup-notification identifier, for which     notification process should be completed
             */
            notify_startup_complete(startup_id: string): void;
            /**
             * Gets a copy of the first #GdkEvent in the `display’`s event queue, without
             * removing the event from the queue.  (Note that this function will
             * not get more events from the windowing system.  It only checks the events
             * that have already been moved to the GDK event queue.)
             * @returns a copy of the first #GdkEvent on the event queue, or %NULL if no events are in the queue. The returned #GdkEvent should be freed with gdk_event_free().
             */
            peek_event(): Event | null;
            /**
             * Test if the pointer is grabbed.
             * @returns %TRUE if an active X pointer grab is in effect
             */
            pointer_is_grabbed(): boolean;
            /**
             * Release any pointer grab.
             * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
             */
            pointer_ungrab(time_: number): void;
            /**
             * Appends a copy of the given event onto the front of the event
             * queue for `display`.
             * @param event a #GdkEvent.
             */
            put_event(event: Event): void;
            /**
             * Request #GdkEventOwnerChange events for ownership changes
             * of the selection named by the given atom.
             * @param selection the #GdkAtom naming the selection for which             ownership change notification is requested
             * @returns whether #GdkEventOwnerChange events will               be sent.
             */
            request_selection_notification(selection: Atom): boolean;
            /**
             * Sets the double click distance (two clicks within this distance
             * count as a double click and result in a #GDK_2BUTTON_PRESS event).
             * See also gdk_display_set_double_click_time().
             * Applications should not set this, it is a global
             * user-configured setting.
             * @param distance distance in pixels
             */
            set_double_click_distance(distance: number): void;
            /**
             * Sets the double click time (two clicks within this time interval
             * count as a double click and result in a #GDK_2BUTTON_PRESS event).
             * Applications should not set this, it is a global
             * user-configured setting.
             * @param msec double click time in milliseconds (thousandths of a second)
             */
            set_double_click_time(msec: number): void;
            /**
             * Issues a request to the clipboard manager to store the
             * clipboard data. On X11, this is a special program that works
             * according to the
             * [FreeDesktop Clipboard Specification](http://www.freedesktop.org/Standards/clipboard-manager-spec).
             * @param clipboard_window a #GdkWindow belonging to the clipboard owner
             * @param time_ a timestamp
             * @param targets an array of targets                    that should be saved, or %NULL                    if all available targets should be saved.
             */
            store_clipboard(clipboard_window: Window, time_: number, targets?: Atom[] | null): void;
            /**
             * Returns whether the speicifed display supports clipboard
             * persistance; i.e. if it’s possible to store the clipboard data after an
             * application has quit. On X11 this checks if a clipboard daemon is
             * running.
             * @returns %TRUE if the display supports clipboard persistance.
             */
            supports_clipboard_persistence(): boolean;
            /**
             * Returns %TRUE if gdk_window_set_composited() can be used
             * to redirect drawing on the window using compositing.
             *
             * Currently this only works on X11 with XComposite and
             * XDamage extensions available.
             * @returns %TRUE if windows may be composited.
             */
            supports_composite(): boolean;
            /**
             * Returns %TRUE if cursors can use an 8bit alpha channel
             * on `display`. Otherwise, cursors are restricted to bilevel
             * alpha (i.e. a mask).
             * @returns whether cursors can have alpha channels.
             */
            supports_cursor_alpha(): boolean;
            /**
             * Returns %TRUE if multicolored cursors are supported
             * on `display`. Otherwise, cursors have only a forground
             * and a background color.
             * @returns whether cursors can have multiple colors.
             */
            supports_cursor_color(): boolean;
            /**
             * Returns %TRUE if gdk_window_input_shape_combine_mask() can
             * be used to modify the input shape of windows on `display`.
             * @returns %TRUE if windows with modified input shape are supported
             */
            supports_input_shapes(): boolean;
            /**
             * Returns whether #GdkEventOwnerChange events will be
             * sent when the owner of a selection changes.
             * @returns whether #GdkEventOwnerChange events will               be sent.
             */
            supports_selection_notification(): boolean;
            /**
             * Returns %TRUE if gdk_window_shape_combine_mask() can
             * be used to create shaped windows on `display`.
             * @returns %TRUE if shaped windows are supported
             */
            supports_shapes(): boolean;
            /**
             * Flushes any requests queued for the windowing system and waits until all
             * requests have been handled. This is often used for making sure that the
             * display is synchronized with the current state of the program. Calling
             * gdk_display_sync() before gdk_error_trap_pop() makes sure that any errors
             * generated from earlier requests are handled before the error trap is
             * removed.
             *
             * This is most useful for X11. On windowing systems where requests are
             * handled synchronously, this function will do nothing.
             */
            sync(): void;
            /**
             * Warps the pointer of `display` to the point `x,``y` on
             * the screen `screen,` unless the pointer is confined
             * to a window by a grab, in which case it will be moved
             * as far as allowed by the grab. Warping the pointer
             * creates events as if the user had moved the mouse
             * instantaneously to the destination.
             *
             * Note that the pointer should normally be under the
             * control of the user. This function was added to cover
             * some rare use cases like keyboard navigation support
             * for the color picker in the #GtkColorSelectionDialog.
             * @param screen the screen of @display to warp the pointer to
             * @param x the x coordinate of the destination
             * @param y the y coordinate of the destination
             */
            warp_pointer(screen: Screen, x: number, y: number): void;
        }

        namespace DisplayManager {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'display-opened': (arg0: Display) => void;
                'notify::default-display': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                default_display: Display;
                defaultDisplay: Display;
            }
        }

        /**
         * The purpose of the #GdkDisplayManager singleton object is to offer
         * notification when displays appear or disappear or the default display
         * changes.
         *
         * You can use gdk_display_manager_get() to obtain the #GdkDisplayManager
         * singleton, but that should be rarely necessary. Typically, initializing
         * GTK+ opens a display that you can work with without ever accessing the
         * #GdkDisplayManager.
         *
         * The GDK library can be built with support for multiple backends.
         * The #GdkDisplayManager object determines which backend is used
         * at runtime.
         *
         * When writing backend-specific code that is supposed to work with
         * multiple GDK backends, you have to consider both compile time and
         * runtime. At compile time, use the #GDK_WINDOWING_X11, #GDK_WINDOWING_WIN32
         * macros, etc. to find out which backends are present in the GDK library
         * you are building your application against. At runtime, use type-check
         * macros like GDK_IS_X11_DISPLAY() to find out which backend is in use:
         *
         * ## Backend-specific code ## {#backend-specific}
         *
         *
         * ```c
         * #ifdef GDK_WINDOWING_X11
         *   if (GDK_IS_X11_DISPLAY (display))
         *     {
         *       // make X11-specific calls here
         *     }
         *   else
         * #endif
         * #ifdef GDK_WINDOWING_QUARTZ
         *   if (GDK_IS_QUARTZ_DISPLAY (display))
         *     {
         *       // make Quartz-specific calls here
         *     }
         *   else
         * #endif
         *   g_error ("Unsupported GDK backend");
         * ```
         *
         */
        class DisplayManager extends GObject.Object {
            static $gtype: GObject.GType<DisplayManager>;

            // Properties

            get default_display(): Display;
            set default_display(val: Display);
            get defaultDisplay(): Display;
            set defaultDisplay(val: Display);

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: DisplayManager.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<DisplayManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof DisplayManager.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, DisplayManager.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof DisplayManager.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, DisplayManager.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof DisplayManager.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<DisplayManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Static methods

            /**
             * Gets the singleton #GdkDisplayManager object.
             *
             * When called for the first time, this function consults the
             * `GDK_BACKEND` environment variable to find out which
             * of the supported GDK backends to use (in case GDK has been compiled
             * with multiple backends). Applications can use gdk_set_allowed_backends()
             * to limit what backends can be used.
             */
            static get(): DisplayManager;

            // Methods

            /**
             * Gets the default #GdkDisplay.
             * @returns a #GdkDisplay, or %NULL if     there is no default display.
             */
            get_default_display(): Display | null;
            /**
             * List all currently open displays.
             * @returns a newly     allocated #GSList of #GdkDisplay objects. Free with g_slist_free()     when you are done with it.
             */
            list_displays(): Display[];
            /**
             * Opens a display.
             * @param name the name of the display to open
             * @returns a #GdkDisplay, or %NULL if the     display could not be opened
             */
            open_display(name: string): Display | null;
            /**
             * Sets `display` as the default display.
             * @param display a #GdkDisplay
             */
            set_default_display(display: Display): void;
        }

        namespace DragContext {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'action-changed': (arg0: DragAction) => void;
                cancel: (arg0: DragCancelReason) => void;
                'dnd-finished': () => void;
                'drop-performed': (arg0: number) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class DragContext extends GObject.Object {
            static $gtype: GObject.GType<DragContext>;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: DragContext.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<DragContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof DragContext.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, DragContext.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof DragContext.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, DragContext.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof DragContext.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<DragContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Determines the bitmask of actions proposed by the source if
             * gdk_drag_context_get_suggested_action() returns %GDK_ACTION_ASK.
             * @returns the #GdkDragAction flags
             */
            get_actions(): DragAction;
            /**
             * Returns the destination window for the DND operation.
             * @returns a #GdkWindow
             */
            get_dest_window(): Window;
            /**
             * Returns the #GdkDevice associated to the drag context.
             * @returns The #GdkDevice associated to @context.
             */
            get_device(): Device;
            /**
             * Returns the window on which the drag icon should be rendered
             * during the drag operation. Note that the window may not be
             * available until the drag operation has begun. GDK will move
             * the window in accordance with the ongoing drag operation.
             * The window is owned by `context` and will be destroyed when
             * the drag operation is over.
             * @returns the drag window, or %NULL
             */
            get_drag_window(): Window | null;
            /**
             * Returns the drag protocol that is used by this context.
             * @returns the drag protocol
             */
            get_protocol(): DragProtocol;
            /**
             * Determines the action chosen by the drag destination.
             * @returns a #GdkDragAction value
             */
            get_selected_action(): DragAction;
            /**
             * Returns the #GdkWindow where the DND operation started.
             * @returns a #GdkWindow
             */
            get_source_window(): Window;
            /**
             * Determines the suggested drag action of the context.
             * @returns a #GdkDragAction value
             */
            get_suggested_action(): DragAction;
            /**
             * Retrieves the list of targets of the context.
             * @returns a #GList of targets
             */
            list_targets(): Atom[];
            /**
             * Requests the drag and drop operation to be managed by `context`.
             * When a drag and drop operation becomes managed, the #GdkDragContext
             * will internally handle all input and source-side #GdkEventDND events
             * as required by the windowing system.
             *
             * Once the drag and drop operation is managed, the drag context will
             * emit the following signals:
             * - The #GdkDragContext::action-changed signal whenever the final action
             *   to be performed by the drag and drop operation changes.
             * - The #GdkDragContext::drop-performed signal after the user performs
             *   the drag and drop gesture (typically by releasing the mouse button).
             * - The #GdkDragContext::dnd-finished signal after the drag and drop
             *   operation concludes (after all #GdkSelection transfers happen).
             * - The #GdkDragContext::cancel signal if the drag and drop operation is
             *   finished but doesn't happen over an accepting destination, or is
             *   cancelled through other means.
             * @param ipc_window Window to use for IPC messaging/events
             * @param actions the actions supported by the drag source
             * @returns #TRUE if the drag and drop operation is managed.
             */
            manage_dnd(ipc_window: Window, actions: DragAction | null): boolean;
            /**
             * Associates a #GdkDevice to `context,` so all Drag and Drop events
             * for `context` are emitted as if they came from this device.
             * @param device a #GdkDevice
             */
            set_device(device: Device): void;
            /**
             * Sets the position of the drag window that will be kept
             * under the cursor hotspot. Initially, the hotspot is at the
             * top left corner of the drag window.
             * @param hot_x x coordinate of the drag window hotspot
             * @param hot_y y coordinate of the drag window hotspot
             */
            set_hotspot(hot_x: number, hot_y: number): void;
        }

        namespace DrawingContext {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'notify::clip': (pspec: GObject.ParamSpec) => void;
                'notify::window': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                clip: cairo.Region;
                window: Window;
            }
        }

        /**
         * #GdkDrawingContext is an object that represents the current drawing
         * state of a #GdkWindow.
         *
         * It's possible to use a #GdkDrawingContext to draw on a #GdkWindow
         * via rendering API like Cairo or OpenGL.
         *
         * A #GdkDrawingContext can only be created by calling gdk_window_begin_draw_frame()
         * and will be valid until a call to gdk_window_end_draw_frame().
         *
         * #GdkDrawingContext is available since GDK 3.22
         */
        class DrawingContext extends GObject.Object {
            static $gtype: GObject.GType<DrawingContext>;

            // Properties

            /**
             * The clip region applied to the drawing context.
             */
            get clip(): cairo.Region;
            /**
             * The #GdkWindow that created the drawing context.
             */
            get window(): Window;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: DrawingContext.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<DrawingContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof DrawingContext.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, DrawingContext.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof DrawingContext.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, DrawingContext.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof DrawingContext.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<DrawingContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Retrieves a Cairo context to be used to draw on the #GdkWindow
             * that created the #GdkDrawingContext.
             *
             * The returned context is guaranteed to be valid as long as the
             * #GdkDrawingContext is valid, that is between a call to
             * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame().
             * @returns a Cairo context to be used to draw   the contents of the #GdkWindow. The context is owned by the   #GdkDrawingContext and should not be destroyed
             */
            get_cairo_context(): cairo.Context;
            /**
             * Retrieves a copy of the clip region used when creating the `context`.
             * @returns a Cairo region
             */
            get_clip(): cairo.Region | null;
            /**
             * Retrieves the window that created the drawing `context`.
             * @returns a #GdkWindow
             */
            get_window(): Window;
            /**
             * Checks whether the given #GdkDrawingContext is valid.
             * @returns %TRUE if the context is valid
             */
            is_valid(): boolean;
        }

        namespace FrameClock {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'after-paint': () => void;
                'before-paint': () => void;
                'flush-events': () => void;
                layout: () => void;
                paint: () => void;
                'resume-events': () => void;
                update: () => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A #GdkFrameClock tells the application when to update and repaint a
         * window. This may be synced to the vertical refresh rate of the
         * monitor, for example. Even when the frame clock uses a simple timer
         * rather than a hardware-based vertical sync, the frame clock helps
         * because it ensures everything paints at the same time (reducing the
         * total number of frames). The frame clock can also automatically
         * stop painting when it knows the frames will not be visible, or
         * scale back animation framerates.
         *
         * #GdkFrameClock is designed to be compatible with an OpenGL-based
         * implementation or with mozRequestAnimationFrame in Firefox,
         * for example.
         *
         * A frame clock is idle until someone requests a frame with
         * gdk_frame_clock_request_phase(). At some later point that makes
         * sense for the synchronization being implemented, the clock will
         * process a frame and emit signals for each phase that has been
         * requested. (See the signals of the #GdkFrameClock class for
         * documentation of the phases. %GDK_FRAME_CLOCK_PHASE_UPDATE and the
         * #GdkFrameClock::update signal are most interesting for application
         * writers, and are used to update the animations, using the frame time
         * given by gdk_frame_clock_get_frame_time().
         *
         * The frame time is reported in microseconds and generally in the same
         * timescale as g_get_monotonic_time(), however, it is not the same
         * as g_get_monotonic_time(). The frame time does not advance during
         * the time a frame is being painted, and outside of a frame, an attempt
         * is made so that all calls to gdk_frame_clock_get_frame_time() that
         * are called at a “similar” time get the same value. This means that
         * if different animations are timed by looking at the difference in
         * time between an initial value from gdk_frame_clock_get_frame_time()
         * and the value inside the #GdkFrameClock::update signal of the clock,
         * they will stay exactly synchronized.
         */
        abstract class FrameClock extends GObject.Object {
            static $gtype: GObject.GType<FrameClock>;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: FrameClock.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<FrameClock.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof FrameClock.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, FrameClock.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof FrameClock.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, FrameClock.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof FrameClock.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<FrameClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Starts updates for an animation. Until a matching call to
             * gdk_frame_clock_end_updating() is made, the frame clock will continually
             * request a new frame with the %GDK_FRAME_CLOCK_PHASE_UPDATE phase.
             * This function may be called multiple times and frames will be
             * requested until gdk_frame_clock_end_updating() is called the same
             * number of times.
             */
            begin_updating(): void;
            /**
             * Stops updates for an animation. See the documentation for
             * gdk_frame_clock_begin_updating().
             */
            end_updating(): void;
            /**
             * Gets the frame timings for the current frame.
             * @returns the #GdkFrameTimings for the  frame currently being processed, or even no frame is being  processed, for the previous frame. Before any frames have been  processed, returns %NULL.
             */
            get_current_timings(): FrameTimings | null;
            /**
             * A #GdkFrameClock maintains a 64-bit counter that increments for
             * each frame drawn.
             * @returns inside frame processing, the value of the frame counter  for the current frame. Outside of frame processing, the frame   counter for the last frame.
             */
            get_frame_counter(): number;
            /**
             * Gets the time that should currently be used for animations.  Inside
             * the processing of a frame, it’s the time used to compute the
             * animation position of everything in a frame. Outside of a frame, it's
             * the time of the conceptual “previous frame,” which may be either
             * the actual previous frame time, or if that’s too old, an updated
             * time.
             * @returns a timestamp in microseconds, in the timescale of  of g_get_monotonic_time().
             */
            get_frame_time(): number;
            /**
             * #GdkFrameClock internally keeps a history of #GdkFrameTimings
             * objects for recent frames that can be retrieved with
             * gdk_frame_clock_get_timings(). The set of stored frames
             * is the set from the counter values given by
             * gdk_frame_clock_get_history_start() and
             * gdk_frame_clock_get_frame_counter(), inclusive.
             * @returns the frame counter value for the oldest frame  that is available in the internal frame history of the  #GdkFrameClock.
             */
            get_history_start(): number;
            /**
             * Using the frame history stored in the frame clock, finds the last
             * known presentation time and refresh interval, and assuming that
             * presentation times are separated by the refresh interval,
             * predicts a presentation time that is a multiple of the refresh
             * interval after the last presentation time, and later than `base_time`.
             * @param base_time base time for determining a presentaton time
             */
            get_refresh_info(base_time: number): [number, number];
            /**
             * Retrieves a #GdkFrameTimings object holding timing information
             * for the current frame or a recent frame. The #GdkFrameTimings
             * object may not yet be complete: see gdk_frame_timings_get_complete().
             * @param frame_counter the frame counter value identifying the frame to  be received.
             * @returns the #GdkFrameTimings object for  the specified frame, or %NULL if it is not available. See  gdk_frame_clock_get_history_start().
             */
            get_timings(frame_counter: number): FrameTimings | null;
            /**
             * Asks the frame clock to run a particular phase. The signal
             * corresponding the requested phase will be emitted the next
             * time the frame clock processes. Multiple calls to
             * gdk_frame_clock_request_phase() will be combined together
             * and only one frame processed. If you are displaying animated
             * content and want to continually request the
             * %GDK_FRAME_CLOCK_PHASE_UPDATE phase for a period of time,
             * you should use gdk_frame_clock_begin_updating() instead, since
             * this allows GTK+ to adjust system parameters to get maximally
             * smooth animations.
             * @param phase the phase that is requested
             */
            request_phase(phase: FrameClockPhase | null): void;
        }

        namespace GLContext {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'notify::display': (pspec: GObject.ParamSpec) => void;
                'notify::shared-context': (pspec: GObject.ParamSpec) => void;
                'notify::window': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                display: Display;
                shared_context: GLContext;
                sharedContext: GLContext;
                window: Window;
            }
        }

        /**
         * #GdkGLContext is an object representing the platform-specific
         * OpenGL drawing context.
         *
         * #GdkGLContexts are created for a #GdkWindow using
         * gdk_window_create_gl_context(), and the context will match
         * the #GdkVisual of the window.
         *
         * A #GdkGLContext is not tied to any particular normal framebuffer.
         * For instance, it cannot draw to the #GdkWindow back buffer. The GDK
         * repaint system is in full control of the painting to that. Instead,
         * you can create render buffers or textures and use gdk_cairo_draw_from_gl()
         * in the draw function of your widget to draw them. Then GDK will handle
         * the integration of your rendering with that of other widgets.
         *
         * Support for #GdkGLContext is platform-specific, context creation
         * can fail, returning %NULL context.
         *
         * A #GdkGLContext has to be made "current" in order to start using
         * it, otherwise any OpenGL call will be ignored.
         *
         * ## Creating a new OpenGL context ##
         *
         * In order to create a new #GdkGLContext instance you need a
         * #GdkWindow, which you typically get during the realize call
         * of a widget.
         *
         * A #GdkGLContext is not realized until either gdk_gl_context_make_current(),
         * or until it is realized using gdk_gl_context_realize(). It is possible to
         * specify details of the GL context like the OpenGL version to be used, or
         * whether the GL context should have extra state validation enabled after
         * calling gdk_window_create_gl_context() by calling gdk_gl_context_realize().
         * If the realization fails you have the option to change the settings of the
         * #GdkGLContext and try again.
         *
         * ## Using a GdkGLContext ##
         *
         * You will need to make the #GdkGLContext the current context
         * before issuing OpenGL calls; the system sends OpenGL commands to
         * whichever context is current. It is possible to have multiple
         * contexts, so you always need to ensure that the one which you
         * want to draw with is the current one before issuing commands:
         *
         *
         * ```c
         *   gdk_gl_context_make_current (context);
         * ```
         *
         *
         * You can now perform your drawing using OpenGL commands.
         *
         * You can check which #GdkGLContext is the current one by using
         * gdk_gl_context_get_current(); you can also unset any #GdkGLContext
         * that is currently set by calling gdk_gl_context_clear_current().
         */
        abstract class GLContext extends GObject.Object {
            static $gtype: GObject.GType<GLContext>;

            // Properties

            /**
             * The #GdkDisplay used to create the #GdkGLContext.
             */
            get display(): Display;
            /**
             * The #GdkGLContext that this context is sharing data with, or %NULL
             */
            get shared_context(): GLContext;
            /**
             * The #GdkGLContext that this context is sharing data with, or %NULL
             */
            get sharedContext(): GLContext;
            /**
             * The #GdkWindow the gl context is bound to.
             */
            get window(): Window;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: GLContext.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<GLContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof GLContext.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, GLContext.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof GLContext.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, GLContext.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof GLContext.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<GLContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Static methods

            /**
             * Clears the current #GdkGLContext.
             *
             * Any OpenGL call after this function returns will be ignored
             * until gdk_gl_context_make_current() is called.
             */
            static clear_current(): void;
            /**
             * Retrieves the current #GdkGLContext.
             */
            static get_current(): GLContext | null;

            // Methods

            /**
             * Retrieves the value set using gdk_gl_context_set_debug_enabled().
             * @returns %TRUE if debugging is enabled
             */
            get_debug_enabled(): boolean;
            /**
             * Retrieves the #GdkDisplay the `context` is created for
             * @returns a #GdkDisplay or %NULL
             */
            get_display(): Display | null;
            /**
             * Retrieves the value set using gdk_gl_context_set_forward_compatible().
             * @returns %TRUE if the context should be forward compatible
             */
            get_forward_compatible(): boolean;
            /**
             * Retrieves the major and minor version requested by calling
             * gdk_gl_context_set_required_version().
             */
            get_required_version(): [number, number];
            /**
             * Retrieves the #GdkGLContext that this `context` share data with.
             * @returns a #GdkGLContext or %NULL
             */
            get_shared_context(): GLContext | null;
            /**
             * Checks whether the `context` is using an OpenGL or OpenGL ES profile.
             * @returns %TRUE if the #GdkGLContext is using an OpenGL ES profile
             */
            get_use_es(): boolean;
            /**
             * Retrieves the OpenGL version of the `context`.
             *
             * The `context` must be realized prior to calling this function.
             */
            get_version(): [number, number];
            /**
             * Retrieves the #GdkWindow used by the `context`.
             * @returns a #GdkWindow or %NULL
             */
            get_window(): Window | null;
            /**
             * Whether the #GdkGLContext is in legacy mode or not.
             *
             * The #GdkGLContext must be realized before calling this function.
             *
             * When realizing a GL context, GDK will try to use the OpenGL 3.2 core
             * profile; this profile removes all the OpenGL API that was deprecated
             * prior to the 3.2 version of the specification. If the realization is
             * successful, this function will return %FALSE.
             *
             * If the underlying OpenGL implementation does not support core profiles,
             * GDK will fall back to a pre-3.2 compatibility profile, and this function
             * will return %TRUE.
             *
             * You can use the value returned by this function to decide which kind
             * of OpenGL API to use, or whether to do extension discovery, or what
             * kind of shader programs to load.
             * @returns %TRUE if the GL context is in legacy mode
             */
            is_legacy(): boolean;
            /**
             * Makes the `context` the current one.
             */
            make_current(): void;
            /**
             * Realizes the given #GdkGLContext.
             *
             * It is safe to call this function on a realized #GdkGLContext.
             * @returns %TRUE if the context is realized
             */
            realize(): boolean;
            /**
             * Sets whether the #GdkGLContext should perform extra validations and
             * run time checking. This is useful during development, but has
             * additional overhead.
             *
             * The #GdkGLContext must not be realized or made current prior to
             * calling this function.
             * @param enabled whether to enable debugging in the context
             */
            set_debug_enabled(enabled: boolean): void;
            /**
             * Sets whether the #GdkGLContext should be forward compatible.
             *
             * Forward compatibile contexts must not support OpenGL functionality that
             * has been marked as deprecated in the requested version; non-forward
             * compatible contexts, on the other hand, must support both deprecated and
             * non deprecated functionality.
             *
             * The #GdkGLContext must not be realized or made current prior to calling
             * this function.
             * @param compatible whether the context should be forward compatible
             */
            set_forward_compatible(compatible: boolean): void;
            /**
             * Sets the major and minor version of OpenGL to request.
             *
             * Setting `major` and `minor` to zero will use the default values.
             *
             * The #GdkGLContext must not be realized or made current prior to calling
             * this function.
             * @param major the major version to request
             * @param minor the minor version to request
             */
            set_required_version(major: number, minor: number): void;
            /**
             * Requests that GDK create a OpenGL ES context instead of an OpenGL one,
             * if the platform and windowing system allows it.
             *
             * The `context` must not have been realized.
             *
             * By default, GDK will attempt to automatically detect whether the
             * underlying GL implementation is OpenGL or OpenGL ES once the `context`
             * is realized.
             *
             * You should check the return value of gdk_gl_context_get_use_es() after
             * calling gdk_gl_context_realize() to decide whether to use the OpenGL or
             * OpenGL ES API, extensions, or shaders.
             * @param use_es whether the context should use OpenGL ES instead of OpenGL,   or -1 to allow auto-detection
             */
            set_use_es(use_es: number): void;
        }

        namespace Keymap {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'direction-changed': () => void;
                'keys-changed': () => void;
                'state-changed': () => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A #GdkKeymap defines the translation from keyboard state
         * (including a hardware key, a modifier mask, and active keyboard group)
         * to a keyval. This translation has two phases. The first phase is
         * to determine the effective keyboard group and level for the keyboard
         * state; the second phase is to look up the keycode/group/level triplet
         * in the keymap and see what keyval it corresponds to.
         */
        class Keymap extends GObject.Object {
            static $gtype: GObject.GType<Keymap>;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Keymap.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Keymap.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Keymap.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Keymap.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Keymap.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Keymap.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Keymap.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Keymap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Static methods

            /**
             * Returns the #GdkKeymap attached to the default display.
             */
            static get_default(): Keymap;
            /**
             * Returns the #GdkKeymap attached to `display`.
             * @param display the #GdkDisplay.
             */
            static get_for_display(display: Display): Keymap;

            // Methods

            /**
             * Maps the non-virtual modifiers (i.e Mod2, Mod3, ...) which are set
             * in `state` to the virtual modifiers (i.e. Super, Hyper and Meta) and
             * set the corresponding bits in `state`.
             *
             * GDK already does this before delivering key events, but for
             * compatibility reasons, it only sets the first virtual modifier
             * it finds, whereas this function sets all matching virtual modifiers.
             *
             * This function is useful when matching key events against
             * accelerators.
             * @param state pointer to the modifier mask to change
             */
            add_virtual_modifiers(state: ModifierType | null): ModifierType;
            /**
             * Returns whether the Caps Lock modifer is locked.
             * @returns %TRUE if Caps Lock is on
             */
            get_caps_lock_state(): boolean;
            /**
             * Returns the direction of effective layout of the keymap.
             * @returns %PANGO_DIRECTION_LTR or %PANGO_DIRECTION_RTL   if it can determine the direction. %PANGO_DIRECTION_NEUTRAL   otherwise.
             */
            get_direction(): Pango.Direction;
            /**
             * Returns the keyvals bound to `hardware_keycode`.
             * The Nth #GdkKeymapKey in `keys` is bound to the Nth
             * keyval in `keyvals`. Free the returned arrays with g_free().
             * When a keycode is pressed by the user, the keyval from
             * this list of entries is selected by considering the effective
             * keyboard group and level. See gdk_keymap_translate_keyboard_state().
             * @param hardware_keycode a keycode
             * @returns %TRUE if there were any entries
             */
            get_entries_for_keycode(hardware_keycode: number): [boolean, KeymapKey[] | null, number[] | null];
            /**
             * Obtains a list of keycode/group/level combinations that will
             * generate `keyval`. Groups and levels are two kinds of keyboard mode;
             * in general, the level determines whether the top or bottom symbol
             * on a key is used, and the group determines whether the left or
             * right symbol is used. On US keyboards, the shift key changes the
             * keyboard level, and there are no groups. A group switch key might
             * convert a keyboard between Hebrew to English modes, for example.
             * #GdkEventKey contains a %group field that indicates the active
             * keyboard group. The level is computed from the modifier mask.
             * The returned array should be freed
             * with g_free().
             * @param keyval a keyval, such as %GDK_KEY_a, %GDK_KEY_Up, %GDK_KEY_Return, etc.
             * @returns %TRUE if keys were found and returned
             */
            get_entries_for_keyval(keyval: number): [boolean, KeymapKey[]];
            /**
             * Returns the modifier mask the `keymap’`s windowing system backend
             * uses for a particular purpose.
             *
             * Note that this function always returns real hardware modifiers, not
             * virtual ones (e.g. it will return #GDK_MOD1_MASK rather than
             * #GDK_META_MASK if the backend maps MOD1 to META), so there are use
             * cases where the return value of this function has to be transformed
             * by gdk_keymap_add_virtual_modifiers() in order to contain the
             * expected result.
             * @param intent the use case for the modifier mask
             * @returns the modifier mask used for @intent.
             */
            get_modifier_mask(intent: ModifierIntent | null): ModifierType;
            /**
             * Returns the current modifier state.
             * @returns the current modifier state.
             */
            get_modifier_state(): number;
            /**
             * Returns whether the Num Lock modifer is locked.
             * @returns %TRUE if Num Lock is on
             */
            get_num_lock_state(): boolean;
            /**
             * Returns whether the Scroll Lock modifer is locked.
             * @returns %TRUE if Scroll Lock is on
             */
            get_scroll_lock_state(): boolean;
            /**
             * Determines if keyboard layouts for both right-to-left and left-to-right
             * languages are in use.
             * @returns %TRUE if there are layouts in both directions, %FALSE otherwise
             */
            have_bidi_layouts(): boolean;
            /**
             * Looks up the keyval mapped to a keycode/group/level triplet.
             * If no keyval is bound to `key,` returns 0. For normal user input,
             * you want to use gdk_keymap_translate_keyboard_state() instead of
             * this function, since the effective group/level may not be
             * the same as the current keyboard state.
             * @param key a #GdkKeymapKey with keycode, group, and level initialized
             * @returns a keyval, or 0 if none was mapped to the given @key
             */
            lookup_key(key: KeymapKey): number;
            /**
             * Maps the virtual modifiers (i.e. Super, Hyper and Meta) which
             * are set in `state` to their non-virtual counterparts (i.e. Mod2,
             * Mod3,...) and set the corresponding bits in `state`.
             *
             * This function is useful when matching key events against
             * accelerators.
             * @param state pointer to the modifier state to map
             * @returns %FALSE if two virtual modifiers were mapped to the     same non-virtual modifier. Note that %FALSE is also returned     if a virtual modifier is mapped to a non-virtual modifier that     was already set in @state.
             */
            map_virtual_modifiers(state: ModifierType | null): [boolean, ModifierType];
            /**
             * Translates the contents of a #GdkEventKey into a keyval, effective
             * group, and level. Modifiers that affected the translation and
             * are thus unavailable for application use are returned in
             * `consumed_modifiers`.
             * See [Groups][key-group-explanation] for an explanation of
             * groups and levels. The `effective_group` is the group that was
             * actually used for the translation; some keys such as Enter are not
             * affected by the active keyboard group. The `level` is derived from
             * `state`. For convenience, #GdkEventKey already contains the translated
             * keyval, so this function isn’t as useful as you might think.
             *
             * `consumed_modifiers` gives modifiers that should be masked outfrom `state`
             * when comparing this key press to a hot key. For instance, on a US keyboard,
             * the `plus` symbol is shifted, so when comparing a key press to a
             * `<Control>plus` accelerator `<Shift>` should be masked out.
             *
             *
             * ```c
             * // We want to ignore irrelevant modifiers like ScrollLock
             * #define ALL_ACCELS_MASK (GDK_CONTROL_MASK | GDK_SHIFT_MASK | GDK_MOD1_MASK)
             * gdk_keymap_translate_keyboard_state (keymap, event->hardware_keycode,
             *                                      event->state, event->group,
             *                                      &keyval, NULL, NULL, &consumed);
             * if (keyval == GDK_PLUS &&
             *     (event->state & ~consumed & ALL_ACCELS_MASK) == GDK_CONTROL_MASK)
             *   // Control was pressed
             * ```
             *
             *
             * An older interpretation `consumed_modifiers` was that it contained
             * all modifiers that might affect the translation of the key;
             * this allowed accelerators to be stored with irrelevant consumed
             * modifiers, by doing:
             *
             * ```c
             * // XXX Don’t do this XXX
             * if (keyval == accel_keyval &&
             *     (event->state & ~consumed & ALL_ACCELS_MASK) == (accel_mods & ~consumed))
             *   // Accelerator was pressed
             * ```
             *
             *
             * However, this did not work if multi-modifier combinations were
             * used in the keymap, since, for instance, `<Control>` would be
             * masked out even if only `<Control><Alt>` was used in the keymap.
             * To support this usage as well as well as possible, all single
             * modifier combinations that could affect the key for any combination
             * of modifiers will be returned in `consumed_modifiers;` multi-modifier
             * combinations are returned only when actually found in `state`. When
             * you store accelerators, you should always store them with consumed
             * modifiers removed. Store `<Control>plus`, not `<Control><Shift>plus`,
             * @param hardware_keycode a keycode
             * @param state a modifier state
             * @param group active keyboard group
             * @returns %TRUE if there was a keyval bound to the keycode/state/group
             */
            translate_keyboard_state(
                hardware_keycode: number,
                state: ModifierType | null,
                group: number,
            ): [boolean, number, number, number, ModifierType | null];
        }

        namespace Monitor {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                invalidate: () => void;
                'notify::display': (pspec: GObject.ParamSpec) => void;
                'notify::geometry': (pspec: GObject.ParamSpec) => void;
                'notify::height-mm': (pspec: GObject.ParamSpec) => void;
                'notify::manufacturer': (pspec: GObject.ParamSpec) => void;
                'notify::model': (pspec: GObject.ParamSpec) => void;
                'notify::refresh-rate': (pspec: GObject.ParamSpec) => void;
                'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
                'notify::subpixel-layout': (pspec: GObject.ParamSpec) => void;
                'notify::width-mm': (pspec: GObject.ParamSpec) => void;
                'notify::workarea': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                display: Display;
                geometry: Rectangle;
                height_mm: number;
                heightMm: number;
                manufacturer: string;
                model: string;
                refresh_rate: number;
                refreshRate: number;
                scale_factor: number;
                scaleFactor: number;
                subpixel_layout: SubpixelLayout;
                subpixelLayout: SubpixelLayout;
                width_mm: number;
                widthMm: number;
                workarea: Rectangle;
            }
        }

        /**
         * GdkMonitor objects represent the individual outputs that are
         * associated with a #GdkDisplay. GdkDisplay has APIs to enumerate
         * monitors with gdk_display_get_n_monitors() and gdk_display_get_monitor(), and
         * to find particular monitors with gdk_display_get_primary_monitor() or
         * gdk_display_get_monitor_at_window().
         *
         * GdkMonitor was introduced in GTK+ 3.22 and supersedes earlier
         * APIs in GdkScreen to obtain monitor-related information.
         */
        class Monitor extends GObject.Object {
            static $gtype: GObject.GType<Monitor>;

            // Properties

            get display(): Display;
            get geometry(): Rectangle;
            get height_mm(): number;
            get heightMm(): number;
            get manufacturer(): string;
            get model(): string;
            get refresh_rate(): number;
            get refreshRate(): number;
            get scale_factor(): number;
            get scaleFactor(): number;
            get subpixel_layout(): SubpixelLayout;
            get subpixelLayout(): SubpixelLayout;
            get width_mm(): number;
            get widthMm(): number;
            get workarea(): Rectangle;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Monitor.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Monitor.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Monitor.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Monitor.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Gets the display that this monitor belongs to.
             * @returns the display
             */
            get_display(): Display;
            /**
             * Retrieves the size and position of an individual monitor within the
             * display coordinate space. The returned geometry is in  ”application pixels”,
             * not in ”device pixels” (see gdk_monitor_get_scale_factor()).
             */
            get_geometry(): Rectangle;
            /**
             * Gets the height in millimeters of the monitor.
             * @returns the physical height of the monitor
             */
            get_height_mm(): number;
            /**
             * Gets the name or PNP ID of the monitor's manufacturer, if available.
             *
             * Note that this value might also vary depending on actual
             * display backend.
             *
             * PNP ID registry is located at https://uefi.org/pnp_id_list
             * @returns the name of the manufacturer, or %NULL
             */
            get_manufacturer(): string | null;
            /**
             * Gets the a string identifying the monitor model, if available.
             * @returns the monitor model, or %NULL
             */
            get_model(): string | null;
            /**
             * Gets the refresh rate of the monitor, if available.
             *
             * The value is in milli-Hertz, so a refresh rate of 60Hz
             * is returned as 60000.
             * @returns the refresh rate in milli-Hertz, or 0
             */
            get_refresh_rate(): number;
            /**
             * Gets the internal scale factor that maps from monitor coordinates
             * to the actual device pixels. On traditional systems this is 1, but
             * on very high density outputs this can be a higher value (often 2).
             *
             * This can be used if you want to create pixel based data for a
             * particular monitor, but most of the time you’re drawing to a window
             * where it is better to use gdk_window_get_scale_factor() instead.
             * @returns the scale factor
             */
            get_scale_factor(): number;
            /**
             * Gets information about the layout of red, green and blue
             * primaries for each pixel in this monitor, if available.
             * @returns the subpixel layout
             */
            get_subpixel_layout(): SubpixelLayout;
            /**
             * Gets the width in millimeters of the monitor.
             * @returns the physical width of the monitor
             */
            get_width_mm(): number;
            /**
             * Retrieves the size and position of the “work area” on a monitor
             * within the display coordinate space. The returned geometry is in
             * ”application pixels”, not in ”device pixels” (see
             * gdk_monitor_get_scale_factor()).
             *
             * The work area should be considered when positioning menus and
             * similar popups, to avoid placing them below panels, docks or other
             * desktop components.
             *
             * Note that not all backends may have a concept of workarea. This
             * function will return the monitor geometry if a workarea is not
             * available, or does not apply.
             */
            get_workarea(): Rectangle;
            /**
             * Gets whether this monitor should be considered primary
             * (see gdk_display_get_primary_monitor()).
             * @returns %TRUE if @monitor is primary
             */
            is_primary(): boolean;
        }

        namespace Screen {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'composited-changed': () => void;
                'monitors-changed': () => void;
                'size-changed': () => void;
                'notify::font-options': (pspec: GObject.ParamSpec) => void;
                'notify::resolution': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                font_options: any;
                fontOptions: any;
                resolution: number;
            }
        }

        /**
         * #GdkScreen objects are the GDK representation of the screen on
         * which windows can be displayed and on which the pointer moves.
         * X originally identified screens with physical screens, but
         * nowadays it is more common to have a single #GdkScreen which
         * combines several physical monitors (see gdk_screen_get_n_monitors()).
         *
         * GdkScreen is used throughout GDK and GTK+ to specify which screen
         * the top level windows are to be displayed on. it is also used to
         * query the screen specification and default settings such as
         * the default visual (gdk_screen_get_system_visual()), the dimensions
         * of the physical monitors (gdk_screen_get_monitor_geometry()), etc.
         */
        class Screen extends GObject.Object {
            static $gtype: GObject.GType<Screen>;

            // Properties

            get font_options(): any;
            set font_options(val: any);
            get fontOptions(): any;
            set fontOptions(val: any);
            get resolution(): number;
            set resolution(val: number);

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Screen.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Screen.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Screen.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Screen.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Screen.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Screen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Static methods

            /**
             * Gets the default screen for the default display. (See
             * gdk_display_get_default ()).
             */
            static get_default(): Screen | null;
            /**
             * Gets the height of the default screen in pixels. The returned
             * size is in ”application pixels”, not in ”device pixels” (see
             * gdk_screen_get_monitor_scale_factor()).
             */
            static height(): number;
            /**
             * Returns the height of the default screen in millimeters.
             * Note that on many X servers this value will not be correct.
             */
            static height_mm(): number;
            /**
             * Gets the width of the default screen in pixels. The returned
             * size is in ”application pixels”, not in ”device pixels” (see
             * gdk_screen_get_monitor_scale_factor()).
             */
            static width(): number;
            /**
             * Returns the width of the default screen in millimeters.
             * Note that on many X servers this value will not be correct.
             */
            static width_mm(): number;

            // Methods

            /**
             * Returns the screen’s currently active window.
             *
             * On X11, this is done by inspecting the _NET_ACTIVE_WINDOW property
             * on the root window, as described in the
             * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
             * If there is no currently currently active
             * window, or the window manager does not support the
             * _NET_ACTIVE_WINDOW hint, this function returns %NULL.
             *
             * On other platforms, this function may return %NULL, depending on whether
             * it is implementable on that platform.
             *
             * The returned window should be unrefed using g_object_unref() when
             * no longer needed.
             * @returns the currently active window,   or %NULL.
             */
            get_active_window(): Window | null;
            /**
             * Gets the display to which the `screen` belongs.
             * @returns the display to which @screen belongs
             */
            get_display(): Display;
            /**
             * Gets any options previously set with gdk_screen_set_font_options().
             * @returns the current font options, or %NULL if no  default font options have been set.
             */
            get_font_options(): cairo.FontOptions | null;
            /**
             * Gets the height of `screen` in pixels. The returned size is in
             * ”application pixels”, not in ”device pixels” (see
             * gdk_screen_get_monitor_scale_factor()).
             * @returns the height of @screen in pixels.
             */
            get_height(): number;
            /**
             * Returns the height of `screen` in millimeters.
             *
             * Note that this value is somewhat ill-defined when the screen
             * has multiple monitors of different resolution. It is recommended
             * to use the monitor dimensions instead.
             * @returns the heigth of @screen in millimeters.
             */
            get_height_mm(): number;
            /**
             * Returns the monitor number in which the point (`x,``y)` is located.
             * @param x the x coordinate in the virtual screen.
             * @param y the y coordinate in the virtual screen.
             * @returns the monitor number in which the point (@x,@y) lies, or   a monitor close to (@x,@y) if the point is not in any monitor.
             */
            get_monitor_at_point(x: number, y: number): number;
            /**
             * Returns the number of the monitor in which the largest area of the
             * bounding rectangle of `window` resides.
             * @param window a #GdkWindow
             * @returns the monitor number in which most of @window is located,     or if @window does not intersect any monitors, a monitor,     close to @window.
             */
            get_monitor_at_window(window: Window): number;
            /**
             * Retrieves the #GdkRectangle representing the size and position of
             * the individual monitor within the entire screen area. The returned
             * geometry is in ”application pixels”, not in ”device pixels” (see
             * gdk_screen_get_monitor_scale_factor()).
             *
             * Monitor numbers start at 0. To obtain the number of monitors of
             * `screen,` use gdk_screen_get_n_monitors().
             *
             * Note that the size of the entire screen area can be retrieved via
             * gdk_screen_get_width() and gdk_screen_get_height().
             * @param monitor_num the monitor number
             */
            get_monitor_geometry(monitor_num: number): Rectangle | null;
            /**
             * Gets the height in millimeters of the specified monitor.
             * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
             * @returns the height of the monitor, or -1 if not available
             */
            get_monitor_height_mm(monitor_num: number): number;
            /**
             * Returns the output name of the specified monitor.
             * Usually something like VGA, DVI, or TV, not the actual
             * product name of the display device.
             * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
             * @returns a newly-allocated string containing the name   of the monitor, or %NULL if the name cannot be determined
             */
            get_monitor_plug_name(monitor_num: number): string | null;
            /**
             * Returns the internal scale factor that maps from monitor coordinates
             * to the actual device pixels. On traditional systems this is 1, but
             * on very high density outputs this can be a higher value (often 2).
             *
             * This can be used if you want to create pixel based data for a
             * particular monitor, but most of the time you’re drawing to a window
             * where it is better to use gdk_window_get_scale_factor() instead.
             * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
             * @returns the scale factor
             */
            get_monitor_scale_factor(monitor_num: number): number;
            /**
             * Gets the width in millimeters of the specified monitor, if available.
             * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
             * @returns the width of the monitor, or -1 if not available
             */
            get_monitor_width_mm(monitor_num: number): number;
            /**
             * Retrieves the #GdkRectangle representing the size and position of
             * the “work area” on a monitor within the entire screen area. The returned
             * geometry is in ”application pixels”, not in ”device pixels” (see
             * gdk_screen_get_monitor_scale_factor()).
             *
             * The work area should be considered when positioning menus and
             * similar popups, to avoid placing them below panels, docks or other
             * desktop components.
             *
             * Note that not all backends may have a concept of workarea. This
             * function will return the monitor geometry if a workarea is not
             * available, or does not apply.
             *
             * Monitor numbers start at 0. To obtain the number of monitors of
             * `screen,` use gdk_screen_get_n_monitors().
             * @param monitor_num the monitor number
             */
            get_monitor_workarea(monitor_num: number): Rectangle | null;
            /**
             * Returns the number of monitors which `screen` consists of.
             * @returns number of monitors which @screen consists of
             */
            get_n_monitors(): number;
            /**
             * Gets the index of `screen` among the screens in the display
             * to which it belongs. (See gdk_screen_get_display())
             * @returns the index
             */
            get_number(): number;
            /**
             * Gets the primary monitor for `screen`.  The primary monitor
             * is considered the monitor where the “main desktop” lives.
             * While normal application windows typically allow the window
             * manager to place the windows, specialized desktop applications
             * such as panels should place themselves on the primary monitor.
             *
             * If no primary monitor is configured by the user, the return value
             * will be 0, defaulting to the first monitor.
             * @returns An integer index for the primary monitor, or 0 if none is configured.
             */
            get_primary_monitor(): number;
            /**
             * Gets the resolution for font handling on the screen; see
             * gdk_screen_set_resolution() for full details.
             * @returns the current resolution, or -1 if no resolution has been set.
             */
            get_resolution(): number;
            /**
             * Gets a visual to use for creating windows with an alpha channel.
             * The windowing system on which GTK+ is running
             * may not support this capability, in which case %NULL will
             * be returned. Even if a non-%NULL value is returned, its
             * possible that the window’s alpha channel won’t be honored
             * when displaying the window on the screen: in particular, for
             * X an appropriate windowing manager and compositing manager
             * must be running to provide appropriate display.
             *
             * This functionality is not implemented in the Windows backend.
             *
             * For setting an overall opacity for a top-level window, see
             * gdk_window_set_opacity().
             * @returns a visual to use for windows     with an alpha channel or %NULL if the capability is not     available.
             */
            get_rgba_visual(): Visual | null;
            /**
             * Gets the root window of `screen`.
             * @returns the root window
             */
            get_root_window(): Window;
            /**
             * Retrieves a desktop-wide setting such as double-click time
             * for the #GdkScreen `screen`.
             *
             * FIXME needs a list of valid settings here, or a link to
             * more information.
             * @param name the name of the setting
             * @param value location to store the value of the setting
             * @returns %TRUE if the setting existed and a value was stored   in @value, %FALSE otherwise.
             */
            get_setting(name: string, value: GObject.Value | any): boolean;
            /**
             * Get the system’s default visual for `screen`.
             * This is the visual for the root window of the display.
             * The return value should not be freed.
             * @returns the system visual
             */
            get_system_visual(): Visual;
            /**
             * Obtains a list of all toplevel windows known to GDK on the screen `screen`.
             * A toplevel window is a child of the root window (see
             * gdk_get_default_root_window()).
             *
             * The returned list should be freed with g_list_free(), but
             * its elements need not be freed.
             * @returns list of toplevel windows, free with g_list_free()
             */
            get_toplevel_windows(): Window[];
            /**
             * Gets the width of `screen` in pixels. The returned size is in
             * ”application pixels”, not in ”device pixels” (see
             * gdk_screen_get_monitor_scale_factor()).
             * @returns the width of @screen in pixels.
             */
            get_width(): number;
            /**
             * Gets the width of `screen` in millimeters.
             *
             * Note that this value is somewhat ill-defined when the screen
             * has multiple monitors of different resolution. It is recommended
             * to use the monitor dimensions instead.
             * @returns the width of @screen in millimeters.
             */
            get_width_mm(): number;
            /**
             * Returns a #GList of #GdkWindows representing the current
             * window stack.
             *
             * On X11, this is done by inspecting the _NET_CLIENT_LIST_STACKING
             * property on the root window, as described in the
             * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
             * If the window manager does not support the
             * _NET_CLIENT_LIST_STACKING hint, this function returns %NULL.
             *
             * On other platforms, this function may return %NULL, depending on whether
             * it is implementable on that platform.
             *
             * The returned list is newly allocated and owns references to the
             * windows it contains, so it should be freed using g_list_free() and
             * its windows unrefed using g_object_unref() when no longer needed.
             * @returns a     list of #GdkWindows for the current window stack, or %NULL.
             */
            get_window_stack(): Window[] | null;
            /**
             * Returns whether windows with an RGBA visual can reasonably
             * be expected to have their alpha channel drawn correctly on
             * the screen.
             *
             * On X11 this function returns whether a compositing manager is
             * compositing `screen`.
             * @returns Whether windows with RGBA visuals can reasonably be expected to have their alpha channels drawn correctly on the screen.
             */
            is_composited(): boolean;
            /**
             * Lists the available visuals for the specified `screen`.
             * A visual describes a hardware image data format.
             * For example, a visual might support 24-bit color, or 8-bit color,
             * and might expect pixels to be in a certain format.
             *
             * Call g_list_free() on the return value when you’re finished with it.
             * @returns a list of visuals; the list must be freed, but not its contents
             */
            list_visuals(): Visual[];
            /**
             * Determines the name to pass to gdk_display_open() to get
             * a #GdkDisplay with this screen as the default screen.
             * @returns a newly allocated string, free with g_free()
             */
            make_display_name(): string;
            /**
             * Sets the default font options for the screen. These
             * options will be set on any #PangoContext’s newly created
             * with gdk_pango_context_get_for_screen(). Changing the
             * default set of font options does not affect contexts that
             * have already been created.
             * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
             */
            set_font_options(options?: cairo.FontOptions | null): void;
            /**
             * Sets the resolution for font handling on the screen. This is a
             * scale factor between points specified in a #PangoFontDescription
             * and cairo units. The default value is 96, meaning that a 10 point
             * font will be 13 units high. (10 * 96. / 72. = 13.3).
             * @param dpi the resolution in “dots per inch”. (Physical inches aren’t actually   involved; the terminology is conventional.)
             */
            set_resolution(dpi: number): void;
        }

        namespace Seat {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'device-added': (arg0: Device) => void;
                'device-removed': (arg0: Device) => void;
                'tool-added': (arg0: DeviceTool) => void;
                'tool-removed': (arg0: DeviceTool) => void;
                'notify::display': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                display: Display;
            }
        }

        /**
         * The #GdkSeat object represents a collection of input devices
         * that belong to a user.
         */
        abstract class Seat extends GObject.Object {
            static $gtype: GObject.GType<Seat>;

            // Properties

            /**
             * #GdkDisplay of this seat.
             */
            get display(): Display;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Seat.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Seat.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Seat.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Seat.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Seat.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Seat.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Seat.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Seat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Returns the capabilities this #GdkSeat currently has.
             * @returns the seat capabilities
             */
            get_capabilities(): SeatCapabilities;
            /**
             * Returns the #GdkDisplay this seat belongs to.
             * @returns a #GdkDisplay. This object is owned by GTK+          and must not be freed.
             */
            get_display(): Display;
            /**
             * Returns the master device that routes keyboard events.
             * @returns a master #GdkDevice with keyboard          capabilities. This object is owned by GTK+ and must not be freed.
             */
            get_keyboard(): Device | null;
            /**
             * Returns the master device that routes pointer events.
             * @returns a master #GdkDevice with pointer          capabilities. This object is owned by GTK+ and must not be freed.
             */
            get_pointer(): Device | null;
            /**
             * Returns the slave devices that match the given capabilities.
             * @param capabilities capabilities to get devices for
             * @returns A list of #GdkDevices.          The list must be freed with g_list_free(), the elements are owned          by GDK and must not be freed.
             */
            get_slaves(capabilities: SeatCapabilities | null): Device[];
            /**
             * Grabs the seat so that all events corresponding to the given `capabilities`
             * are passed to this application until the seat is ungrabbed with gdk_seat_ungrab(),
             * or the window becomes hidden. This overrides any previous grab on the
             * seat by this client.
             *
             * As a rule of thumb, if a grab is desired over %GDK_SEAT_CAPABILITY_POINTER,
             * all other "pointing" capabilities (eg. %GDK_SEAT_CAPABILITY_TOUCH) should
             * be grabbed too, so the user is able to interact with all of those while
             * the grab holds, you should thus use %GDK_SEAT_CAPABILITY_ALL_POINTING most
             * commonly.
             *
             * Grabs are used for operations which need complete control over the
             * events corresponding to the given capabilities. For example in GTK+ this
             * is used for Drag and Drop operations, popup menus and such.
             *
             * Note that if the event mask of a #GdkWindow has selected both button press
             * and button release events, or touch begin and touch end, then a press event
             * will cause an automatic grab until the button is released, equivalent to a
             * grab on the window with `owner_events` set to %TRUE. This is done because most
             * applications expect to receive paired press and release events.
             *
             * If you set up anything at the time you take the grab that needs to be
             * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
             * events that are emitted when the grab ends unvoluntarily.
             * @param window the #GdkWindow which will own the grab
             * @param capabilities capabilities that will be grabbed
             * @param owner_events if %FALSE then all device events are reported with respect to                @window and are only reported if selected by @event_mask. If                %TRUE then pointer events for this application are reported                as normal, but pointer events outside this application are                reported with respect to @window and only if selected by                @event_mask. In either mode, unreported events are discarded.
             * @param cursor the cursor to display while the grab is active. If          this is %NULL then the normal cursors are used for          @window and its descendants, and the cursor for @window is used          elsewhere.
             * @param event the event that is triggering the grab, or %NULL if none         is available.
             * @param prepare_func function to                prepare the window to be grabbed, it can be %NULL if @window is                visible before this call.
             * @returns %GDK_GRAB_SUCCESS if the grab was successful.
             */
            grab(
                window: Window,
                capabilities: SeatCapabilities | null,
                owner_events: boolean,
                cursor?: Cursor | null,
                event?: Event | null,
                prepare_func?: SeatGrabPrepareFunc | null,
            ): GrabStatus;
            /**
             * Releases a grab added through gdk_seat_grab().
             */
            ungrab(): void;
        }

        namespace Visual {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {}

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A #GdkVisual contains information about
         * a particular visual.
         */
        class Visual extends GObject.Object {
            static $gtype: GObject.GType<Visual>;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Visual.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Visual.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Visual.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Visual.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Visual.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Visual.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Visual.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Visual.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Static methods

            /**
             * Get the visual with the most available colors for the default
             * GDK screen. The return value should not be freed.
             */
            static get_best(): Visual;
            /**
             * Get the best available depth for the default GDK screen.  “Best”
             * means “largest,” i.e. 32 preferred over 24 preferred over 8 bits
             * per pixel.
             */
            static get_best_depth(): number;
            /**
             * Return the best available visual type for the default GDK screen.
             */
            static get_best_type(): VisualType;
            /**
             * Combines gdk_visual_get_best_with_depth() and
             * gdk_visual_get_best_with_type().
             * @param depth a bit depth
             * @param visual_type a visual type
             */
            static get_best_with_both(depth: number, visual_type: VisualType): Visual | null;
            /**
             * Get the best visual with depth `depth` for the default GDK screen.
             * Color visuals and visuals with mutable colormaps are preferred
             * over grayscale or fixed-colormap visuals. The return value should
             * not be freed. %NULL may be returned if no visual supports `depth`.
             * @param depth a bit depth
             */
            static get_best_with_depth(depth: number): Visual;
            /**
             * Get the best visual of the given `visual_type` for the default GDK screen.
             * Visuals with higher color depths are considered better. The return value
             * should not be freed. %NULL may be returned if no visual has type
             * `visual_type`.
             * @param visual_type a visual type
             */
            static get_best_with_type(visual_type: VisualType): Visual;
            /**
             * Get the system’s default visual for the default GDK screen.
             * This is the visual for the root window of the display.
             * The return value should not be freed.
             */
            static get_system(): Visual;

            // Methods

            /**
             * Returns the number of significant bits per red, green and blue value.
             *
             * Not all GDK backend provide a meaningful value for this function.
             * @returns The number of significant bits per color value for @visual.
             */
            get_bits_per_rgb(): number;
            /**
             * Obtains values that are needed to calculate blue pixel values in TrueColor
             * and DirectColor. The “mask” is the significant bits within the pixel.
             * The “shift” is the number of bits left we must shift a primary for it
             * to be in position (according to the "mask"). Finally, "precision" refers
             * to how much precision the pixel value contains for a particular primary.
             */
            get_blue_pixel_details(): [number, number, number];
            /**
             * Returns the byte order of this visual.
             *
             * The information returned by this function is only relevant
             * when working with XImages, and not all backends return
             * meaningful information for this.
             * @returns A #GdkByteOrder stating the byte order of @visual.
             */
            get_byte_order(): ByteOrder;
            /**
             * Returns the size of a colormap for this visual.
             *
             * You have to use platform-specific APIs to manipulate colormaps.
             * @returns The size of a colormap that is suitable for @visual.
             */
            get_colormap_size(): number;
            /**
             * Returns the bit depth of this visual.
             * @returns The bit depth of this visual.
             */
            get_depth(): number;
            /**
             * Obtains values that are needed to calculate green pixel values in TrueColor
             * and DirectColor. The “mask” is the significant bits within the pixel.
             * The “shift” is the number of bits left we must shift a primary for it
             * to be in position (according to the "mask"). Finally, "precision" refers
             * to how much precision the pixel value contains for a particular primary.
             */
            get_green_pixel_details(): [number, number, number];
            /**
             * Obtains values that are needed to calculate red pixel values in TrueColor
             * and DirectColor. The “mask” is the significant bits within the pixel.
             * The “shift” is the number of bits left we must shift a primary for it
             * to be in position (according to the "mask"). Finally, "precision" refers
             * to how much precision the pixel value contains for a particular primary.
             */
            get_red_pixel_details(): [number, number, number];
            /**
             * Gets the screen to which this visual belongs
             * @returns the screen to which this visual belongs.
             */
            get_screen(): Screen;
            /**
             * Returns the type of visual this is (PseudoColor, TrueColor, etc).
             * @returns A #GdkVisualType stating the type of @visual.
             */
            get_visual_type(): VisualType;
        }

        namespace Window {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'create-surface': (arg0: number, arg1: number) => cairo.Surface;
                'from-embedder': (arg0: number, arg1: number, arg2: number, arg3: number) => void;
                'moved-to-rect': (arg0: any | null, arg1: any | null, arg2: boolean, arg3: boolean) => void;
                'pick-embedded-child': (arg0: number, arg1: number) => Window | null;
                'to-embedder': (arg0: number, arg1: number, arg2: number, arg3: number) => void;
                'notify::cursor': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                cursor: Cursor;
            }
        }

        abstract class Window extends GObject.Object {
            static $gtype: GObject.GType<Window>;

            // Properties

            /**
             * The mouse pointer for a #GdkWindow. See gdk_window_set_cursor() and
             * gdk_window_get_cursor() for details.
             */
            get cursor(): Cursor;
            set cursor(val: Cursor);

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Window.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                parent: Window | null,
                attributes: WindowAttr,
                attributes_mask: WindowAttributesType,
            ): Window;

            // Signals

            connect<K extends keyof Window.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Window.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Window.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Static methods

            /**
             * Obtains the window underneath the mouse pointer, returning the
             * location of that window in `win_x,` `win_y`. Returns %NULL if the
             * window under the mouse pointer is not known to GDK (if the window
             * belongs to another application and a #GdkWindow hasn’t been created
             * for it with gdk_window_foreign_new())
             *
             * NOTE: For multihead-aware widgets or applications use
             * gdk_display_get_window_at_pointer() instead.
             */
            static at_pointer(): [Window, number, number];
            /**
             * Constrains a desired width and height according to a
             * set of geometry hints (such as minimum and maximum size).
             * @param geometry a #GdkGeometry structure
             * @param flags a mask indicating what portions of @geometry are set
             * @param width desired width of window
             * @param height desired height of the window
             */
            static constrain_size(
                geometry: Geometry,
                flags: WindowHints,
                width: number,
                height: number,
            ): [number, number];
            /**
             * Calls gdk_window_process_updates() for all windows (see #GdkWindow)
             * in the application.
             */
            static process_all_updates(): void;
            /**
             * With update debugging enabled, calls to
             * gdk_window_invalidate_region() clear the invalidated region of the
             * screen to a noticeable color, and GDK pauses for a short time
             * before sending exposes to windows during
             * gdk_window_process_updates().  The net effect is that you can see
             * the invalid region for each window and watch redraws as they
             * occur. This allows you to diagnose inefficiencies in your application.
             *
             * In essence, because the GDK rendering model prevents all flicker,
             * if you are redrawing the same region 400 times you may never
             * notice, aside from noticing a speed problem. Enabling update
             * debugging causes GTK to flicker slowly and noticeably, so you can
             * see exactly what’s being redrawn when, in what order.
             *
             * The --gtk-debug=updates command line option passed to GTK+ programs
             * enables this debug option at application startup time. That's
             * usually more useful than calling gdk_window_set_debug_updates()
             * yourself, though you might want to use this function to enable
             * updates sometime after application startup time.
             * @param setting %TRUE to turn on update debugging
             */
            static set_debug_updates(setting: boolean): void;

            // Virtual methods

            vfunc_create_surface(width: number, height: number): cairo.Surface;
            vfunc_from_embedder(embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number): void;
            vfunc_to_embedder(offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number): void;

            // Methods

            /**
             * Emits a short beep associated to `window` in the appropriate
             * display, if supported. Otherwise, emits a short beep on
             * the display just as gdk_display_beep().
             */
            beep(): void;
            /**
             * Indicates that you are beginning the process of redrawing `region`
             * on `window,` and provides you with a #GdkDrawingContext.
             *
             * If `window` is a top level #GdkWindow, backed by a native window
             * implementation, a backing store (offscreen buffer) large enough to
             * contain `region` will be created. The backing store will be initialized
             * with the background color or background surface for `window`. Then, all
             * drawing operations performed on `window` will be diverted to the
             * backing store. When you call gdk_window_end_frame(), the contents of
             * the backing store will be copied to `window,` making it visible
             * on screen. Only the part of `window` contained in `region` will be
             * modified; that is, drawing operations are clipped to `region`.
             *
             * The net result of all this is to remove flicker, because the user
             * sees the finished product appear all at once when you call
             * gdk_window_end_draw_frame(). If you draw to `window` directly without
             * calling gdk_window_begin_draw_frame(), the user may see flicker
             * as individual drawing operations are performed in sequence.
             *
             * When using GTK+, the widget system automatically places calls to
             * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() around
             * emissions of the `GtkWidget::draw` signal. That is, if you’re
             * drawing the contents of the widget yourself, you can assume that the
             * widget has a cleared background, is already set as the clip region,
             * and already has a backing store. Therefore in most cases, application
             * code in GTK does not need to call gdk_window_begin_draw_frame()
             * explicitly.
             * @param region a Cairo region
             * @returns a #GdkDrawingContext context that should be   used to draw the contents of the window; the returned context is owned   by GDK.
             */
            begin_draw_frame(region: cairo.Region): DrawingContext;
            /**
             * Begins a window move operation (for a toplevel window).
             *
             * This function assumes that the drag is controlled by the
             * client pointer device, use gdk_window_begin_move_drag_for_device()
             * to begin a drag with a different device.
             * @param button the button being used to drag, or 0 for a keyboard-initiated drag
             * @param root_x root window X coordinate of mouse click that began the drag
             * @param root_y root window Y coordinate of mouse click that began the drag
             * @param timestamp timestamp of mouse click that began the drag
             */
            begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void;
            /**
             * Begins a window move operation (for a toplevel window).
             * You might use this function to implement a “window move grip,” for
             * example. The function works best with window managers that support the
             * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
             * but has a fallback implementation for other window managers.
             * @param device the device used for the operation
             * @param button the button being used to drag, or 0 for a keyboard-initiated drag
             * @param root_x root window X coordinate of mouse click that began the drag
             * @param root_y root window Y coordinate of mouse click that began the drag
             * @param timestamp timestamp of mouse click that began the drag
             */
            begin_move_drag_for_device(
                device: Device,
                button: number,
                root_x: number,
                root_y: number,
                timestamp: number,
            ): void;
            /**
             * A convenience wrapper around gdk_window_begin_paint_region() which
             * creates a rectangular region for you. See
             * gdk_window_begin_paint_region() for details.
             * @param rectangle rectangle you intend to draw to
             */
            begin_paint_rect(rectangle: Rectangle): void;
            /**
             * Indicates that you are beginning the process of redrawing `region`.
             * A backing store (offscreen buffer) large enough to contain `region`
             * will be created. The backing store will be initialized with the
             * background color or background surface for `window`. Then, all
             * drawing operations performed on `window` will be diverted to the
             * backing store.  When you call gdk_window_end_paint(), the backing
             * store will be copied to `window,` making it visible onscreen. Only
             * the part of `window` contained in `region` will be modified; that is,
             * drawing operations are clipped to `region`.
             *
             * The net result of all this is to remove flicker, because the user
             * sees the finished product appear all at once when you call
             * gdk_window_end_paint(). If you draw to `window` directly without
             * calling gdk_window_begin_paint_region(), the user may see flicker
             * as individual drawing operations are performed in sequence.  The
             * clipping and background-initializing features of
             * gdk_window_begin_paint_region() are conveniences for the
             * programmer, so you can avoid doing that work yourself.
             *
             * When using GTK+, the widget system automatically places calls to
             * gdk_window_begin_paint_region() and gdk_window_end_paint() around
             * emissions of the expose_event signal. That is, if you’re writing an
             * expose event handler, you can assume that the exposed area in
             * #GdkEventExpose has already been cleared to the window background,
             * is already set as the clip region, and already has a backing store.
             * Therefore in most cases, application code need not call
             * gdk_window_begin_paint_region(). (You can disable the automatic
             * calls around expose events on a widget-by-widget basis by calling
             * gtk_widget_set_double_buffered().)
             *
             * If you call this function multiple times before calling the
             * matching gdk_window_end_paint(), the backing stores are pushed onto
             * a stack. gdk_window_end_paint() copies the topmost backing store
             * onscreen, subtracts the topmost region from all other regions in
             * the stack, and pops the stack. All drawing operations affect only
             * the topmost backing store in the stack. One matching call to
             * gdk_window_end_paint() is required for each call to
             * gdk_window_begin_paint_region().
             * @param region region you intend to draw to
             */
            begin_paint_region(region: cairo.Region): void;
            /**
             * Begins a window resize operation (for a toplevel window).
             *
             * This function assumes that the drag is controlled by the
             * client pointer device, use gdk_window_begin_resize_drag_for_device()
             * to begin a drag with a different device.
             * @param edge the edge or corner from which the drag is started
             * @param button the button being used to drag, or 0 for a keyboard-initiated drag
             * @param root_x root window X coordinate of mouse click that began the drag
             * @param root_y root window Y coordinate of mouse click that began the drag
             * @param timestamp timestamp of mouse click that began the drag (use gdk_event_get_time())
             */
            begin_resize_drag(
                edge: WindowEdge | null,
                button: number,
                root_x: number,
                root_y: number,
                timestamp: number,
            ): void;
            /**
             * Begins a window resize operation (for a toplevel window).
             * You might use this function to implement a “window resize grip,” for
             * example; in fact #GtkStatusbar uses it. The function works best
             * with window managers that support the
             * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
             * but has a fallback implementation for other window managers.
             * @param edge the edge or corner from which the drag is started
             * @param device the device used for the operation
             * @param button the button being used to drag, or 0 for a keyboard-initiated drag
             * @param root_x root window X coordinate of mouse click that began the drag
             * @param root_y root window Y coordinate of mouse click that began the drag
             * @param timestamp timestamp of mouse click that began the drag (use gdk_event_get_time())
             */
            begin_resize_drag_for_device(
                edge: WindowEdge | null,
                device: Device,
                button: number,
                root_x: number,
                root_y: number,
                timestamp: number,
            ): void;
            /**
             * Does nothing, present only for compatiblity.
             */
            configure_finished(): void;
            /**
             * Transforms window coordinates from a parent window to a child
             * window, where the parent window is the normal parent as returned by
             * gdk_window_get_parent() for normal windows, and the window's
             * embedder as returned by gdk_offscreen_window_get_embedder() for
             * offscreen windows.
             *
             * For normal windows, calling this function is equivalent to subtracting
             * the return values of gdk_window_get_position() from the parent coordinates.
             * For offscreen windows however (which can be arbitrarily transformed),
             * this function calls the GdkWindow::from-embedder: signal to translate
             * the coordinates.
             *
             * You should always use this function when writing generic code that
             * walks down a window hierarchy.
             *
             * See also: gdk_window_coords_to_parent()
             * @param parent_x X coordinate in parent’s coordinate system
             * @param parent_y Y coordinate in parent’s coordinate system
             */
            coords_from_parent(parent_x: number, parent_y: number): [number, number];
            /**
             * Transforms window coordinates from a child window to its parent
             * window, where the parent window is the normal parent as returned by
             * gdk_window_get_parent() for normal windows, and the window's
             * embedder as returned by gdk_offscreen_window_get_embedder() for
             * offscreen windows.
             *
             * For normal windows, calling this function is equivalent to adding
             * the return values of gdk_window_get_position() to the child coordinates.
             * For offscreen windows however (which can be arbitrarily transformed),
             * this function calls the GdkWindow::to-embedder: signal to translate
             * the coordinates.
             *
             * You should always use this function when writing generic code that
             * walks up a window hierarchy.
             *
             * See also: gdk_window_coords_from_parent()
             * @param x X coordinate in child’s coordinate system
             * @param y Y coordinate in child’s coordinate system
             */
            coords_to_parent(x: number, y: number): [number, number];
            /**
             * Creates a new #GdkGLContext matching the
             * framebuffer format to the visual of the #GdkWindow. The context
             * is disconnected from any particular window or surface.
             *
             * If the creation of the #GdkGLContext failed, `error` will be set.
             *
             * Before using the returned #GdkGLContext, you will need to
             * call gdk_gl_context_make_current() or gdk_gl_context_realize().
             * @returns the newly created #GdkGLContext, or %NULL on error
             */
            create_gl_context(): GLContext;
            /**
             * Create a new image surface that is efficient to draw on the
             * given `window`.
             *
             * Initially the surface contents are all 0 (transparent if contents
             * have transparency, black otherwise.)
             *
             * The `width` and `height` of the new surface are not affected by
             * the scaling factor of the `window,` or by the `scale` argument; they
             * are the size of the surface in device pixels. If you wish to create
             * an image surface capable of holding the contents of `window` you can
             * use:
             *
             *
             * ```c
             *   int scale = gdk_window_get_scale_factor (window);
             *   int width = gdk_window_get_width (window) * scale;
             *   int height = gdk_window_get_height (window) * scale;
             *
             *   // format is set elsewhere
             *   cairo_surface_t *surface =
             *     gdk_window_create_similar_image_surface (window,
             *                                              format,
             *                                              width, height,
             *                                              scale);
             * ```
             *
             *
             * Note that unlike cairo_surface_create_similar_image(), the new
             * surface's device scale is set to `scale,` or to the scale factor of
             * `window` if `scale` is 0.
             * @param format the format for the new surface
             * @param width width of the new surface
             * @param height height of the new surface
             * @param scale the scale of the new surface, or 0 to use same as @window
             * @returns a pointer to the newly allocated surface. The caller owns the surface and should call cairo_surface_destroy() when done with it. This function always returns a valid pointer, but it will return a pointer to a “nil” surface if @other is already in an error state or any other error occurs.
             */
            create_similar_image_surface(
                format: cairo.Format | null,
                width: number,
                height: number,
                scale: number,
            ): cairo.Surface;
            /**
             * Create a new surface that is as compatible as possible with the
             * given `window`. For example the new surface will have the same
             * fallback resolution and font options as `window`. Generally, the new
             * surface will also use the same backend as `window,` unless that is
             * not possible for some reason. The type of the returned surface may
             * be examined with cairo_surface_get_type().
             *
             * Initially the surface contents are all 0 (transparent if contents
             * have transparency, black otherwise.)
             * @param content the content for the new surface
             * @param width width of the new surface
             * @param height height of the new surface
             * @returns a pointer to the newly allocated surface. The caller owns the surface and should call cairo_surface_destroy() when done with it. This function always returns a valid pointer, but it will return a pointer to a “nil” surface if @other is already in an error state or any other error occurs.
             */
            create_similar_surface(content: cairo.Content | null, width: number, height: number): cairo.Surface;
            /**
             * Attempt to deiconify (unminimize) `window`. On X11 the window manager may
             * choose to ignore the request to deiconify. When using GTK+,
             * use gtk_window_deiconify() instead of the #GdkWindow variant. Or better yet,
             * you probably want to use gtk_window_present_with_time(), which raises the window, focuses it,
             * unminimizes it, and puts it on the current desktop.
             */
            deiconify(): void;
            /**
             * Destroys the window system resources associated with `window` and decrements `window'`s
             * reference count. The window system resources for all children of `window` are also
             * destroyed, but the children’s reference counts are not decremented.
             *
             * Note that a window will not be destroyed automatically when its reference count
             * reaches zero. You must call this function yourself before that happens.
             */
            destroy(): void;
            destroy_notify(): void;
            /**
             * Does nothing, present only for compatiblity.
             */
            enable_synchronized_configure(): void;
            /**
             * Indicates that the drawing of the contents of `window` started with
             * gdk_window_begin_frame() has been completed.
             *
             * This function will take care of destroying the #GdkDrawingContext.
             *
             * It is an error to call this function without a matching
             * gdk_window_begin_frame() first.
             * @param context the #GdkDrawingContext created by gdk_window_begin_draw_frame()
             */
            end_draw_frame(context: DrawingContext): void;
            /**
             * Indicates that the backing store created by the most recent call
             * to gdk_window_begin_paint_region() should be copied onscreen and
             * deleted, leaving the next-most-recent backing store or no backing
             * store at all as the active paint region. See
             * gdk_window_begin_paint_region() for full details.
             *
             * It is an error to call this function without a matching
             * gdk_window_begin_paint_region() first.
             */
            end_paint(): void;
            /**
             * Tries to ensure that there is a window-system native window for this
             * GdkWindow. This may fail in some situations, returning %FALSE.
             *
             * Offscreen window and children of them can never have native windows.
             *
             * Some backends may not support native child windows.
             * @returns %TRUE if the window has a native window, %FALSE otherwise
             */
            ensure_native(): boolean;
            /**
             * This function does nothing.
             */
            flush(): void;
            /**
             * Sets keyboard focus to `window`. In most cases, gtk_window_present_with_time()
             * should be used on a #GtkWindow, rather than calling this function.
             * @param timestamp timestamp of the event triggering the window focus
             */
            focus(timestamp: number): void;
            /**
             * Temporarily freezes a window and all its descendants such that it won't
             * receive expose events.  The window will begin receiving expose events
             * again when gdk_window_thaw_toplevel_updates_libgtk_only() is called. If
             * gdk_window_freeze_toplevel_updates_libgtk_only()
             * has been called more than once,
             * gdk_window_thaw_toplevel_updates_libgtk_only() must be called
             * an equal number of times to begin processing exposes.
             *
             * This function is not part of the GDK public API and is only
             * for use by GTK+.
             */
            freeze_toplevel_updates_libgtk_only(): void;
            /**
             * Temporarily freezes a window such that it won’t receive expose
             * events.  The window will begin receiving expose events again when
             * gdk_window_thaw_updates() is called. If gdk_window_freeze_updates()
             * has been called more than once, gdk_window_thaw_updates() must be called
             * an equal number of times to begin processing exposes.
             */
            freeze_updates(): void;
            /**
             * Moves the window into fullscreen mode. This means the
             * window covers the entire screen and is above any panels
             * or task bars.
             *
             * If the window was already fullscreen, then this function does nothing.
             *
             * On X11, asks the window manager to put `window` in a fullscreen
             * state, if the window manager supports this operation. Not all
             * window managers support this, and some deliberately ignore it or
             * don’t have a concept of “fullscreen”; so you can’t rely on the
             * fullscreenification actually happening. But it will happen with
             * most standard window managers, and GDK makes a best effort to get
             * it to happen.
             */
            fullscreen(): void;
            /**
             * Moves the window into fullscreen mode on the given monitor. This means
             * the window covers the entire screen and is above any panels or task bars.
             *
             * If the window was already fullscreen, then this function does nothing.
             * @param monitor Which monitor to display fullscreen on.
             */
            fullscreen_on_monitor(monitor: number): void;
            /**
             * This function informs GDK that the geometry of an embedded
             * offscreen window has changed. This is necessary for GDK to keep
             * track of which offscreen window the pointer is in.
             */
            geometry_changed(): void;
            /**
             * Determines whether or not the desktop environment shuld be hinted that
             * the window does not want to receive input focus.
             * @returns whether or not the window should receive input focus.
             */
            get_accept_focus(): boolean;
            /**
             * Gets the pattern used to clear the background on `window`.
             * @returns The pattern to use for the background or %NULL if there is no background.
             */
            get_background_pattern(): cairo.Pattern | null;
            /**
             * Gets the list of children of `window` known to GDK.
             * This function only returns children created via GDK,
             * so for example it’s useless when used with the root window;
             * it only returns windows an application created itself.
             *
             * The returned list must be freed, but the elements in the
             * list need not be.
             * @returns list of child windows inside @window
             */
            get_children(): Window[];
            /**
             * Gets the list of children of `window` known to GDK with a
             * particular `user_data` set on it.
             *
             * The returned list must be freed, but the elements in the
             * list need not be.
             *
             * The list is returned in (relative) stacking order, i.e. the
             * lowest window is first.
             * @param user_data user data to look for
             * @returns list of child windows inside @window
             */
            get_children_with_user_data(user_data?: any | null): Window[];
            /**
             * Computes the region of a window that potentially can be written
             * to by drawing primitives. This region may not take into account
             * other factors such as if the window is obscured by other windows,
             * but no area outside of this region will be affected by drawing
             * primitives.
             * @returns a #cairo_region_t. This must be freed with cairo_region_destroy()          when you are done.
             */
            get_clip_region(): cairo.Region;
            /**
             * Determines whether `window` is composited.
             *
             * See gdk_window_set_composited().
             * @returns %TRUE if the window is composited.
             */
            get_composited(): boolean;
            /**
             * Retrieves a #GdkCursor pointer for the cursor currently set on the
             * specified #GdkWindow, or %NULL.  If the return value is %NULL then
             * there is no custom cursor set on the specified window, and it is
             * using the cursor for its parent window.
             * @returns a #GdkCursor, or %NULL. The   returned object is owned by the #GdkWindow and should not be   unreferenced directly. Use gdk_window_set_cursor() to unset the   cursor of the window
             */
            get_cursor(): Cursor | null;
            /**
             * Returns the decorations set on the GdkWindow with
             * gdk_window_set_decorations().
             * @returns %TRUE if the window has decorations set, %FALSE otherwise.
             */
            get_decorations(): [boolean, WMDecoration];
            /**
             * Retrieves a #GdkCursor pointer for the `device` currently set on the
             * specified #GdkWindow, or %NULL.  If the return value is %NULL then
             * there is no custom cursor set on the specified window, and it is
             * using the cursor for its parent window.
             * @param device a master, pointer #GdkDevice.
             * @returns a #GdkCursor, or %NULL. The   returned object is owned by the #GdkWindow and should not be   unreferenced directly. Use gdk_window_set_cursor() to unset the   cursor of the window
             */
            get_device_cursor(device: Device): Cursor | null;
            /**
             * Returns the event mask for `window` corresponding to an specific device.
             * @param device a #GdkDevice.
             * @returns device event mask for @window
             */
            get_device_events(device: Device): EventMask;
            /**
             * Obtains the current device position and modifier state.
             * The position is given in coordinates relative to the upper left
             * corner of `window`.
             *
             * Use gdk_window_get_device_position_double() if you need subpixel precision.
             * @param device pointer #GdkDevice to query to.
             * @returns The window underneath @device (as with gdk_device_get_window_at_position()), or %NULL if the window is not known to GDK.
             */
            get_device_position(device: Device): [Window | null, number, number, ModifierType | null];
            /**
             * Obtains the current device position in doubles and modifier state.
             * The position is given in coordinates relative to the upper left
             * corner of `window`.
             * @param device pointer #GdkDevice to query to.
             * @returns The window underneath @device (as with gdk_device_get_window_at_position()), or %NULL if the window is not known to GDK.
             */
            get_device_position_double(device: Device): [Window | null, number, number, ModifierType | null];
            /**
             * Gets the #GdkDisplay associated with a #GdkWindow.
             * @returns the #GdkDisplay associated with @window
             */
            get_display(): Display;
            /**
             * Finds out the DND protocol supported by a window.
             * @returns the supported DND protocol.
             */
            get_drag_protocol(): [DragProtocol, Window | null];
            /**
             * Obtains the parent of `window,` as known to GDK. Works like
             * gdk_window_get_parent() for normal windows, but returns the
             * window’s embedder for offscreen windows.
             *
             * See also: gdk_offscreen_window_get_embedder()
             * @returns effective parent of @window
             */
            get_effective_parent(): Window;
            /**
             * Gets the toplevel window that’s an ancestor of `window`.
             *
             * Works like gdk_window_get_toplevel(), but treats an offscreen window's
             * embedder as its parent, using gdk_window_get_effective_parent().
             *
             * See also: gdk_offscreen_window_get_embedder()
             * @returns the effective toplevel window containing @window
             */
            get_effective_toplevel(): Window;
            /**
             * Get the current event compression setting for this window.
             * @returns %TRUE if motion events will be compressed
             */
            get_event_compression(): boolean;
            /**
             * Gets the event mask for `window` for all master input devices. See
             * gdk_window_set_events().
             * @returns event mask for @window
             */
            get_events(): EventMask;
            /**
             * Determines whether or not the desktop environment should be hinted that the
             * window does not want to receive input focus when it is mapped.
             * @returns whether or not the window wants to receive input focus when it is mapped.
             */
            get_focus_on_map(): boolean;
            /**
             * Gets the frame clock for the window. The frame clock for a window
             * never changes unless the window is reparented to a new toplevel
             * window.
             * @returns the frame clock
             */
            get_frame_clock(): FrameClock;
            /**
             * Obtains the bounding box of the window, including window manager
             * titlebar/borders if any. The frame position is given in root window
             * coordinates. To get the position of the window itself (rather than
             * the frame) in root window coordinates, use gdk_window_get_origin().
             */
            get_frame_extents(): Rectangle;
            /**
             * Obtains the #GdkFullscreenMode of the `window`.
             * @returns The #GdkFullscreenMode applied to the window when fullscreen.
             */
            get_fullscreen_mode(): FullscreenMode;
            /**
             * Any of the return location arguments to this function may be %NULL,
             * if you aren’t interested in getting the value of that field.
             *
             * The X and Y coordinates returned are relative to the parent window
             * of `window,` which for toplevels usually means relative to the
             * window decorations (titlebar, etc.) rather than relative to the
             * root window (screen-size background window).
             *
             * On the X11 platform, the geometry is obtained from the X server,
             * so reflects the latest position of `window;` this may be out-of-sync
             * with the position of `window` delivered in the most-recently-processed
             * #GdkEventConfigure. gdk_window_get_position() in contrast gets the
             * position from the most recent configure event.
             *
             * Note: If `window` is not a toplevel, it is much better
             * to call gdk_window_get_position(), gdk_window_get_width() and
             * gdk_window_get_height() instead, because it avoids the roundtrip to
             * the X server and because these functions support the full 32-bit
             * coordinate space, whereas gdk_window_get_geometry() is restricted to
             * the 16-bit coordinates of X11.
             */
            get_geometry(): [number, number, number, number];
            /**
             * Returns the group leader window for `window`. See gdk_window_set_group().
             * @returns the group leader window for @window
             */
            get_group(): Window;
            /**
             * Returns the height of the given `window`.
             *
             * On the X11 platform the returned size is the size reported in the
             * most-recently-processed configure event, rather than the current
             * size on the X server.
             * @returns The height of @window
             */
            get_height(): number;
            /**
             * Determines whether or not the window manager is hinted that `window`
             * has modal behaviour.
             * @returns whether or not the window has the modal hint set.
             */
            get_modal_hint(): boolean;
            /**
             * Obtains the position of a window in root window coordinates.
             * (Compare with gdk_window_get_position() and
             * gdk_window_get_geometry() which return the position of a window
             * relative to its parent window.)
             * @returns not meaningful, ignore
             */
            get_origin(): [number, number, number];
            /**
             * Obtains the parent of `window,` as known to GDK. Does not query the
             * X server; thus this returns the parent as passed to gdk_window_new(),
             * not the actual parent. This should never matter unless you’re using
             * Xlib calls mixed with GDK calls on the X11 platform. It may also
             * matter for toplevel windows, because the window manager may choose
             * to reparent them.
             *
             * Note that you should use gdk_window_get_effective_parent() when
             * writing generic code that walks up a window hierarchy, because
             * gdk_window_get_parent() will most likely not do what you expect if
             * there are offscreen windows in the hierarchy.
             * @returns parent of @window
             */
            get_parent(): Window;
            /**
             * Returns whether input to the window is passed through to the window
             * below.
             *
             * See gdk_window_set_pass_through() for details
             */
            get_pass_through(): boolean;
            /**
             * Obtains the current pointer position and modifier state.
             * The position is given in coordinates relative to the upper left
             * corner of `window`.
             * @returns the window containing the pointer (as with gdk_window_at_pointer()), or %NULL if the window containing the pointer isn’t known to GDK
             */
            get_pointer(): [Window | null, number, number, ModifierType | null];
            /**
             * Obtains the position of the window as reported in the
             * most-recently-processed #GdkEventConfigure. Contrast with
             * gdk_window_get_geometry() which queries the X server for the
             * current window position, regardless of which events have been
             * received or processed.
             *
             * The position coordinates are relative to the window’s parent window.
             */
            get_position(): [number, number];
            /**
             * Obtains the position of a window position in root
             * window coordinates. This is similar to
             * gdk_window_get_origin() but allows you to pass
             * in any position in the window, not just the origin.
             * @param x X coordinate in window
             * @param y Y coordinate in window
             */
            get_root_coords(x: number, y: number): [number, number];
            /**
             * Obtains the top-left corner of the window manager frame in root
             * window coordinates.
             */
            get_root_origin(): [number, number];
            /**
             * Returns the internal scale factor that maps from window coordiantes
             * to the actual device pixels. On traditional systems this is 1, but
             * on very high density outputs this can be a higher value (often 2).
             *
             * A higher value means that drawing is automatically scaled up to
             * a higher resolution, so any code doing drawing will automatically look
             * nicer. However, if you are supplying pixel-based data the scale
             * value can be used to determine whether to use a pixel resource
             * with higher resolution data.
             *
             * The scale of a window may change during runtime, if this happens
             * a configure event will be sent to the toplevel window.
             * @returns the scale factor
             */
            get_scale_factor(): number;
            /**
             * Gets the #GdkScreen associated with a #GdkWindow.
             * @returns the #GdkScreen associated with @window
             */
            get_screen(): Screen;
            /**
             * Returns the event mask for `window` corresponding to the device class specified
             * by `source`.
             * @param source a #GdkInputSource to define the source class.
             * @returns source event mask for @window
             */
            get_source_events(source: InputSource | null): EventMask;
            /**
             * Gets the bitwise OR of the currently active window state flags,
             * from the #GdkWindowState enumeration.
             * @returns window state bitfield
             */
            get_state(): WindowState;
            /**
             * Returns %TRUE if the window is aware of the existence of multiple
             * devices.
             * @returns %TRUE if the window handles multidevice features.
             */
            get_support_multidevice(): boolean;
            /**
             * Gets the toplevel window that’s an ancestor of `window`.
             *
             * Any window type but %GDK_WINDOW_CHILD is considered a
             * toplevel window, as is a %GDK_WINDOW_CHILD window that
             * has a root window as parent.
             *
             * Note that you should use gdk_window_get_effective_toplevel() when
             * you want to get to a window’s toplevel as seen on screen, because
             * gdk_window_get_toplevel() will most likely not do what you expect
             * if there are offscreen windows in the hierarchy.
             * @returns the toplevel window containing @window
             */
            get_toplevel(): Window;
            /**
             * This function returns the type hint set for a window.
             * @returns The type hint set for @window
             */
            get_type_hint(): WindowTypeHint;
            /**
             * Transfers ownership of the update area from `window` to the caller
             * of the function. That is, after calling this function, `window` will
             * no longer have an invalid/dirty region; the update area is removed
             * from `window` and handed to you. If a window has no update area,
             * gdk_window_get_update_area() returns %NULL. You are responsible for
             * calling cairo_region_destroy() on the returned region if it’s non-%NULL.
             * @returns the update area for @window
             */
            get_update_area(): cairo.Region;
            /**
             * Retrieves the user data for `window,` which is normally the widget
             * that `window` belongs to. See gdk_window_set_user_data().
             */
            get_user_data(): any;
            /**
             * Computes the region of the `window` that is potentially visible.
             * This does not necessarily take into account if the window is
             * obscured by other windows, but no area outside of this region
             * is visible.
             * @returns a #cairo_region_t. This must be freed with cairo_region_destroy()          when you are done.
             */
            get_visible_region(): cairo.Region;
            /**
             * Gets the #GdkVisual describing the pixel format of `window`.
             * @returns a #GdkVisual
             */
            get_visual(): Visual;
            /**
             * Returns the width of the given `window`.
             *
             * On the X11 platform the returned size is the size reported in the
             * most-recently-processed configure event, rather than the current
             * size on the X server.
             * @returns The width of @window
             */
            get_width(): number;
            /**
             * Gets the type of the window. See #GdkWindowType.
             * @returns type of window
             */
            get_window_type(): WindowType;
            /**
             * Checks whether the window has a native window or not. Note that
             * you can use gdk_window_ensure_native() if a native window is needed.
             * @returns %TRUE if the @window has a native window, %FALSE otherwise.
             */
            has_native(): boolean;
            /**
             * For toplevel windows, withdraws them, so they will no longer be
             * known to the window manager; for all windows, unmaps them, so
             * they won’t be displayed. Normally done automatically as
             * part of gtk_widget_hide().
             */
            hide(): void;
            /**
             * Asks to iconify (minimize) `window`. The window manager may choose
             * to ignore the request, but normally will honor it. Using
             * gtk_window_iconify() is preferred, if you have a #GtkWindow widget.
             *
             * This function only makes sense when `window` is a toplevel window.
             */
            iconify(): void;
            /**
             * Like gdk_window_shape_combine_region(), but the shape applies
             * only to event handling. Mouse events which happen while
             * the pointer position corresponds to an unset bit in the
             * mask will be passed on the window below `window`.
             *
             * An input shape is typically used with RGBA windows.
             * The alpha channel of the window defines which pixels are
             * invisible and allows for nicely antialiased borders,
             * and the input shape controls where the window is
             * “clickable”.
             *
             * On the X11 platform, this requires version 1.1 of the
             * shape extension.
             *
             * On the Win32 platform, this functionality is not present and the
             * function does nothing.
             * @param shape_region region of window to be non-transparent
             * @param offset_x X position of @shape_region in @window coordinates
             * @param offset_y Y position of @shape_region in @window coordinates
             */
            input_shape_combine_region(shape_region: cairo.Region, offset_x: number, offset_y: number): void;
            /**
             * Adds `region` to the update area for `window`. The update area is the
             * region that needs to be redrawn, or “dirty region.” The call
             * gdk_window_process_updates() sends one or more expose events to the
             * window, which together cover the entire update area. An
             * application would normally redraw the contents of `window` in
             * response to those expose events.
             *
             * GDK will call gdk_window_process_all_updates() on your behalf
             * whenever your program returns to the main loop and becomes idle, so
             * normally there’s no need to do that manually, you just need to
             * invalidate regions that you know should be redrawn.
             *
             * The `child_func` parameter controls whether the region of
             * each child window that intersects `region` will also be invalidated.
             * Only children for which `child_func` returns #TRUE will have the area
             * invalidated.
             * @param region a #cairo_region_t
             * @param child_func function to use to decide if to     recurse to a child, %NULL means never recurse.
             */
            invalidate_maybe_recurse(region: cairo.Region, child_func?: WindowChildFunc | null): void;
            /**
             * A convenience wrapper around gdk_window_invalidate_region() which
             * invalidates a rectangular region. See
             * gdk_window_invalidate_region() for details.
             * @param rect rectangle to invalidate or %NULL to invalidate the whole      window
             * @param invalidate_children whether to also invalidate child windows
             */
            invalidate_rect(rect: Rectangle | null, invalidate_children: boolean): void;
            /**
             * Adds `region` to the update area for `window`. The update area is the
             * region that needs to be redrawn, or “dirty region.” The call
             * gdk_window_process_updates() sends one or more expose events to the
             * window, which together cover the entire update area. An
             * application would normally redraw the contents of `window` in
             * response to those expose events.
             *
             * GDK will call gdk_window_process_all_updates() on your behalf
             * whenever your program returns to the main loop and becomes idle, so
             * normally there’s no need to do that manually, you just need to
             * invalidate regions that you know should be redrawn.
             *
             * The `invalidate_children` parameter controls whether the region of
             * each child window that intersects `region` will also be invalidated.
             * If %FALSE, then the update area for child windows will remain
             * unaffected. See gdk_window_invalidate_maybe_recurse if you need
             * fine grained control over which children are invalidated.
             * @param region a #cairo_region_t
             * @param invalidate_children %TRUE to also invalidate child windows
             */
            invalidate_region(region: cairo.Region, invalidate_children: boolean): void;
            /**
             * Check to see if a window is destroyed..
             * @returns %TRUE if the window is destroyed
             */
            is_destroyed(): boolean;
            /**
             * Determines whether or not the window is an input only window.
             * @returns %TRUE if @window is input only
             */
            is_input_only(): boolean;
            /**
             * Determines whether or not the window is shaped.
             * @returns %TRUE if @window is shaped
             */
            is_shaped(): boolean;
            /**
             * Check if the window and all ancestors of the window are
             * mapped. (This is not necessarily "viewable" in the X sense, since
             * we only check as far as we have GDK window parents, not to the root
             * window.)
             * @returns %TRUE if the window is viewable
             */
            is_viewable(): boolean;
            /**
             * Checks whether the window has been mapped (with gdk_window_show() or
             * gdk_window_show_unraised()).
             * @returns %TRUE if the window is mapped
             */
            is_visible(): boolean;
            /**
             * Lowers `window` to the bottom of the Z-order (stacking order), so that
             * other windows with the same parent window appear above `window`.
             * This is true whether or not the other windows are visible.
             *
             * If `window` is a toplevel, the window manager may choose to deny the
             * request to move the window in the Z-order, gdk_window_lower() only
             * requests the restack, does not guarantee it.
             *
             * Note that gdk_window_show() raises the window again, so don’t call this
             * function before gdk_window_show(). (Try gdk_window_show_unraised().)
             */
            lower(): void;
            /**
             * If you call this during a paint (e.g. between gdk_window_begin_paint_region()
             * and gdk_window_end_paint() then GDK will mark the current clip region of the
             * window as being drawn. This is required when mixing GL rendering via
             * gdk_cairo_draw_from_gl() and cairo rendering, as otherwise GDK has no way
             * of knowing when something paints over the GL-drawn regions.
             *
             * This is typically called automatically by GTK+ and you don't need
             * to care about this.
             * @param cr a #cairo_t
             */
            mark_paint_from_clip(cr: cairo.Context): void;
            /**
             * Maximizes the window. If the window was already maximized, then
             * this function does nothing.
             *
             * On X11, asks the window manager to maximize `window,` if the window
             * manager supports this operation. Not all window managers support
             * this, and some deliberately ignore it or don’t have a concept of
             * “maximized”; so you can’t rely on the maximization actually
             * happening. But it will happen with most standard window managers,
             * and GDK makes a best effort to get it to happen.
             *
             * On Windows, reliably maximizes the window.
             */
            maximize(): void;
            /**
             * Merges the input shape masks for any child windows into the
             * input shape mask for `window`. i.e. the union of all input masks
             * for `window` and its children will become the new input mask
             * for `window`. See gdk_window_input_shape_combine_region().
             *
             * This function is distinct from gdk_window_set_child_input_shapes()
             * because it includes `window’`s input shape mask in the set of
             * shapes to be merged.
             */
            merge_child_input_shapes(): void;
            /**
             * Merges the shape masks for any child windows into the
             * shape mask for `window`. i.e. the union of all masks
             * for `window` and its children will become the new mask
             * for `window`. See gdk_window_shape_combine_region().
             *
             * This function is distinct from gdk_window_set_child_shapes()
             * because it includes `window’`s shape mask in the set of shapes to
             * be merged.
             */
            merge_child_shapes(): void;
            /**
             * Repositions a window relative to its parent window.
             * For toplevel windows, window managers may ignore or modify the move;
             * you should probably use gtk_window_move() on a #GtkWindow widget
             * anyway, instead of using GDK functions. For child windows,
             * the move will reliably succeed.
             *
             * If you’re also planning to resize the window, use gdk_window_move_resize()
             * to both move and resize simultaneously, for a nicer visual effect.
             * @param x X coordinate relative to window’s parent
             * @param y Y coordinate relative to window’s parent
             */
            move(x: number, y: number): void;
            /**
             * Move the part of `window` indicated by `region` by `dy` pixels in the Y
             * direction and `dx` pixels in the X direction. The portions of `region`
             * that not covered by the new position of `region` are invalidated.
             *
             * Child windows are not moved.
             * @param region The #cairo_region_t to move
             * @param dx Amount to move in the X direction
             * @param dy Amount to move in the Y direction
             */
            move_region(region: cairo.Region, dx: number, dy: number): void;
            /**
             * Equivalent to calling gdk_window_move() and gdk_window_resize(),
             * except that both operations are performed at once, avoiding strange
             * visual effects. (i.e. the user may be able to see the window first
             * move, then resize, if you don’t use gdk_window_move_resize().)
             * @param x new X position relative to window’s parent
             * @param y new Y position relative to window’s parent
             * @param width new width
             * @param height new height
             */
            move_resize(x: number, y: number, width: number, height: number): void;
            /**
             * Moves `window` to `rect,` aligning their anchor points.
             *
             * `rect` is relative to the top-left corner of the window that `window` is
             * transient for. `rect_anchor` and `window_anchor` determine anchor points on
             * `rect` and `window` to pin together. `rect'`s anchor point can optionally be
             * offset by `rect_anchor_dx` and `rect_anchor_dy,` which is equivalent to
             * offsetting the position of `window`.
             *
             * `anchor_hints` determines how `window` will be moved if the anchor points cause
             * it to move off-screen. For example, %GDK_ANCHOR_FLIP_X will replace
             * %GDK_GRAVITY_NORTH_WEST with %GDK_GRAVITY_NORTH_EAST and vice versa if
             * `window` extends beyond the left or right edges of the monitor.
             *
             * Connect to the #GdkWindow::moved-to-rect signal to find out how it was
             * actually positioned.
             * @param rect the destination #GdkRectangle to align @window with
             * @param rect_anchor the point on @rect to align with @window's anchor point
             * @param window_anchor the point on @window to align with @rect's anchor point
             * @param anchor_hints positioning hints to use when limited on space
             * @param rect_anchor_dx horizontal offset to shift @window, i.e. @rect's anchor                  point
             * @param rect_anchor_dy vertical offset to shift @window, i.e. @rect's anchor point
             */
            move_to_rect(
                rect: Rectangle,
                rect_anchor: Gravity | null,
                window_anchor: Gravity | null,
                anchor_hints: AnchorHints | null,
                rect_anchor_dx: number,
                rect_anchor_dy: number,
            ): void;
            /**
             * Like gdk_window_get_children(), but does not copy the list of
             * children, so the list does not need to be freed.
             * @returns a reference to the list of child windows in @window
             */
            peek_children(): Window[];
            /**
             * Sends one or more expose events to `window`. The areas in each
             * expose event will cover the entire update area for the window (see
             * gdk_window_invalidate_region() for details). Normally GDK calls
             * gdk_window_process_all_updates() on your behalf, so there’s no
             * need to call this function unless you want to force expose events
             * to be delivered immediately and synchronously (vs. the usual
             * case, where GDK delivers them in an idle handler). Occasionally
             * this is useful to produce nicer scrolling behavior, for example.
             * @param update_children whether to also process updates for child windows
             */
            process_updates(update_children: boolean): void;
            /**
             * Raises `window` to the top of the Z-order (stacking order), so that
             * other windows with the same parent window appear below `window`.
             * This is true whether or not the windows are visible.
             *
             * If `window` is a toplevel, the window manager may choose to deny the
             * request to move the window in the Z-order, gdk_window_raise() only
             * requests the restack, does not guarantee it.
             */
            raise(): void;
            /**
             * Registers a window as a potential drop destination.
             */
            register_dnd(): void;
            /**
             * Reparents `window` into the given `new_parent`. The window being
             * reparented will be unmapped as a side effect.
             * @param new_parent new parent to move @window into
             * @param x X location inside the new parent
             * @param y Y location inside the new parent
             */
            reparent(new_parent: Window, x: number, y: number): void;
            /**
             * Resizes `window;` for toplevel windows, asks the window manager to resize
             * the window. The window manager may not allow the resize. When using GTK+,
             * use gtk_window_resize() instead of this low-level GDK function.
             *
             * Windows may not be resized below 1x1.
             *
             * If you’re also planning to move the window, use gdk_window_move_resize()
             * to both move and resize simultaneously, for a nicer visual effect.
             * @param width new width of the window
             * @param height new height of the window
             */
            resize(width: number, height: number): void;
            /**
             * Changes the position of  `window` in the Z-order (stacking order), so that
             * it is above `sibling` (if `above` is %TRUE) or below `sibling` (if `above` is
             * %FALSE).
             *
             * If `sibling` is %NULL, then this either raises (if `above` is %TRUE) or
             * lowers the window.
             *
             * If `window` is a toplevel, the window manager may choose to deny the
             * request to move the window in the Z-order, gdk_window_restack() only
             * requests the restack, does not guarantee it.
             * @param sibling a #GdkWindow that is a sibling of @window, or %NULL
             * @param above a boolean
             */
            restack(sibling: Window | null, above: boolean): void;
            /**
             * Scroll the contents of `window,` both pixels and children, by the
             * given amount. `window` itself does not move. Portions of the window
             * that the scroll operation brings in from offscreen areas are
             * invalidated. The invalidated region may be bigger than what would
             * strictly be necessary.
             *
             * For X11, a minimum area will be invalidated if the window has no
             * subwindows, or if the edges of the window’s parent do not extend
             * beyond the edges of the window. In other cases, a multi-step process
             * is used to scroll the window which may produce temporary visual
             * artifacts and unnecessary invalidations.
             * @param dx Amount to scroll in the X direction
             * @param dy Amount to scroll in the Y direction
             */
            scroll(dx: number, dy: number): void;
            /**
             * Setting `accept_focus` to %FALSE hints the desktop environment that the
             * window doesn’t want to receive input focus.
             *
             * On X, it is the responsibility of the window manager to interpret this
             * hint. ICCCM-compliant window manager usually respect it.
             * @param accept_focus %TRUE if the window should receive input focus
             */
            set_accept_focus(accept_focus: boolean): void;
            /**
             * Sets the background color of `window`.
             *
             * However, when using GTK+, influence the background of a widget
             * using a style class or CSS — if you’re an application — or with
             * gtk_style_context_set_background() — if you're implementing a
             * custom widget.
             * @param color a #GdkColor
             */
            set_background(color: Color): void;
            /**
             * Sets the background of `window`.
             *
             * A background of %NULL means that the window won't have any background. On the
             * X11 backend it's also possible to inherit the background from the parent
             * window using gdk_x11_get_parent_relative_pattern().
             *
             * The windowing system will normally fill a window with its background
             * when the window is obscured then exposed.
             * @param pattern a pattern to use, or %NULL
             */
            set_background_pattern(pattern?: cairo.Pattern | null): void;
            /**
             * Sets the background color of `window`.
             *
             * See also gdk_window_set_background_pattern().
             * @param rgba a #GdkRGBA color
             */
            set_background_rgba(rgba: RGBA): void;
            /**
             * Sets the input shape mask of `window` to the union of input shape masks
             * for all children of `window,` ignoring the input shape mask of `window`
             * itself. Contrast with gdk_window_merge_child_input_shapes() which includes
             * the input shape mask of `window` in the masks to be merged.
             */
            set_child_input_shapes(): void;
            /**
             * Sets the shape mask of `window` to the union of shape masks
             * for all children of `window,` ignoring the shape mask of `window`
             * itself. Contrast with gdk_window_merge_child_shapes() which includes
             * the shape mask of `window` in the masks to be merged.
             */
            set_child_shapes(): void;
            /**
             * Sets a #GdkWindow as composited, or unsets it. Composited
             * windows do not automatically have their contents drawn to
             * the screen. Drawing is redirected to an offscreen buffer
             * and an expose event is emitted on the parent of the composited
             * window. It is the responsibility of the parent’s expose handler
             * to manually merge the off-screen content onto the screen in
             * whatever way it sees fit.
             *
             * It only makes sense for child windows to be composited; see
             * gdk_window_set_opacity() if you need translucent toplevel
             * windows.
             *
             * An additional effect of this call is that the area of this
             * window is no longer clipped from regions marked for
             * invalidation on its parent. Draws done on the parent
             * window are also no longer clipped by the child.
             *
             * This call is only supported on some systems (currently,
             * only X11 with new enough Xcomposite and Xdamage extensions).
             * You must call gdk_display_supports_composite() to check if
             * setting a window as composited is supported before
             * attempting to do so.
             * @param composited %TRUE to set the window as composited
             */
            set_composited(composited: boolean): void;
            /**
             * Sets the default mouse pointer for a #GdkWindow.
             *
             * Note that `cursor` must be for the same display as `window`.
             *
             * Use gdk_cursor_new_for_display() or gdk_cursor_new_from_pixbuf() to
             * create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
             * Passing %NULL for the `cursor` argument to gdk_window_set_cursor() means
             * that `window` will use the cursor of its parent window. Most windows
             * should use this default.
             * @param cursor a cursor
             */
            set_cursor(cursor?: Cursor | null): void;
            /**
             * “Decorations” are the features the window manager adds to a toplevel #GdkWindow.
             * This function sets the traditional Motif window manager hints that tell the
             * window manager which decorations you would like your window to have.
             * Usually you should use gtk_window_set_decorated() on a #GtkWindow instead of
             * using the GDK function directly.
             *
             * The `decorations` argument is the logical OR of the fields in
             * the #GdkWMDecoration enumeration. If #GDK_DECOR_ALL is included in the
             * mask, the other bits indicate which decorations should be turned off.
             * If #GDK_DECOR_ALL is not included, then the other bits indicate
             * which decorations should be turned on.
             *
             * Most window managers honor a decorations hint of 0 to disable all decorations,
             * but very few honor all possible combinations of bits.
             * @param decorations decoration hint mask
             */
            set_decorations(decorations: WMDecoration | null): void;
            /**
             * Sets a specific #GdkCursor for a given device when it gets inside `window`.
             * Use gdk_cursor_new_for_display() or gdk_cursor_new_from_pixbuf() to create
             * the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR. Passing
             * %NULL for the `cursor` argument to gdk_window_set_cursor() means that
             * `window` will use the cursor of its parent window. Most windows should
             * use this default.
             * @param device a master, pointer #GdkDevice
             * @param cursor a #GdkCursor
             */
            set_device_cursor(device: Device, cursor: Cursor): void;
            /**
             * Sets the event mask for a given device (Normally a floating device, not
             * attached to any visible pointer) to `window`. For example, an event mask
             * including #GDK_BUTTON_PRESS_MASK means the window should report button
             * press events. The event mask is the bitwise OR of values from the
             * #GdkEventMask enumeration.
             *
             * See the [input handling overview][event-masks] for details.
             * @param device #GdkDevice to enable events for.
             * @param event_mask event mask for @window
             */
            set_device_events(device: Device, event_mask: EventMask | null): void;
            /**
             * Determines whether or not extra unprocessed motion events in
             * the event queue can be discarded. If %TRUE only the most recent
             * event will be delivered.
             *
             * Some types of applications, e.g. paint programs, need to see all
             * motion events and will benefit from turning off event compression.
             *
             * By default, event compression is enabled.
             * @param event_compression %TRUE if motion events should be compressed
             */
            set_event_compression(event_compression: boolean): void;
            /**
             * The event mask for a window determines which events will be reported
             * for that window from all master input devices. For example, an event mask
             * including #GDK_BUTTON_PRESS_MASK means the window should report button
             * press events. The event mask is the bitwise OR of values from the
             * #GdkEventMask enumeration.
             *
             * See the [input handling overview][event-masks] for details.
             * @param event_mask event mask for @window
             */
            set_events(event_mask: EventMask | null): void;
            /**
             * Setting `focus_on_map` to %FALSE hints the desktop environment that the
             * window doesn’t want to receive input focus when it is mapped.
             * focus_on_map should be turned off for windows that aren’t triggered
             * interactively (such as popups from network activity).
             *
             * On X, it is the responsibility of the window manager to interpret
             * this hint. Window managers following the freedesktop.org window
             * manager extension specification should respect it.
             * @param focus_on_map %TRUE if the window should receive input focus when mapped
             */
            set_focus_on_map(focus_on_map: boolean): void;
            /**
             * Specifies whether the `window` should span over all monitors (in a multi-head
             * setup) or only the current monitor when in fullscreen mode.
             *
             * The `mode` argument is from the #GdkFullscreenMode enumeration.
             * If #GDK_FULLSCREEN_ON_ALL_MONITORS is specified, the fullscreen `window` will
             * span over all monitors from the #GdkScreen.
             *
             * On X11, searches through the list of monitors from the #GdkScreen the ones
             * which delimit the 4 edges of the entire #GdkScreen and will ask the window
             * manager to span the `window` over these monitors.
             *
             * If the XINERAMA extension is not available or not usable, this function
             * has no effect.
             *
             * Not all window managers support this, so you can’t rely on the fullscreen
             * window to span over the multiple monitors when #GDK_FULLSCREEN_ON_ALL_MONITORS
             * is specified.
             * @param mode fullscreen mode
             */
            set_fullscreen_mode(mode: FullscreenMode | null): void;
            /**
             * Sets hints about the window management functions to make available
             * via buttons on the window frame.
             *
             * On the X backend, this function sets the traditional Motif window
             * manager hint for this purpose. However, few window managers do
             * anything reliable or interesting with this hint. Many ignore it
             * entirely.
             *
             * The `functions` argument is the logical OR of values from the
             * #GdkWMFunction enumeration. If the bitmask includes #GDK_FUNC_ALL,
             * then the other bits indicate which functions to disable; if
             * it doesn’t include #GDK_FUNC_ALL, it indicates which functions to
             * enable.
             * @param functions bitmask of operations to allow on @window
             */
            set_functions(functions: WMFunction | null): void;
            /**
             * Sets the geometry hints for `window`. Hints flagged in `geom_mask`
             * are set, hints not flagged in `geom_mask` are unset.
             * To unset all hints, use a `geom_mask` of 0 and a `geometry` of %NULL.
             *
             * This function provides hints to the windowing system about
             * acceptable sizes for a toplevel window. The purpose of
             * this is to constrain user resizing, but the windowing system
             * will typically  (but is not required to) also constrain the
             * current size of the window to the provided values and
             * constrain programatic resizing via gdk_window_resize() or
             * gdk_window_move_resize().
             *
             * Note that on X11, this effect has no effect on windows
             * of type %GDK_WINDOW_TEMP or windows where override redirect
             * has been turned on via gdk_window_set_override_redirect()
             * since these windows are not resizable by the user.
             *
             * Since you can’t count on the windowing system doing the
             * constraints for programmatic resizes, you should generally
             * call gdk_window_constrain_size() yourself to determine
             * appropriate sizes.
             * @param geometry geometry hints
             * @param geom_mask bitmask indicating fields of @geometry to pay attention to
             */
            set_geometry_hints(geometry: Geometry, geom_mask: WindowHints | null): void;
            /**
             * Sets the group leader window for `window`. By default,
             * GDK sets the group leader for all toplevel windows
             * to a global window implicitly created by GDK. With this function
             * you can override this default.
             *
             * The group leader window allows the window manager to distinguish
             * all windows that belong to a single application. It may for example
             * allow users to minimize/unminimize all windows belonging to an
             * application at once. You should only set a non-default group window
             * if your application pretends to be multiple applications.
             * @param leader group leader window, or %NULL to restore the default group leader window
             */
            set_group(leader?: Window | null): void;
            /**
             * Sets a list of icons for the window. One of these will be used
             * to represent the window when it has been iconified. The icon is
             * usually shown in an icon box or some sort of task bar. Which icon
             * size is shown depends on the window manager. The window manager
             * can scale the icon  but setting several size icons can give better
             * image quality since the window manager may only need to scale the
             * icon by a small amount or not at all.
             *
             * Note that some platforms don't support window icons.
             * @param pixbufs A list of pixbufs, of different sizes.
             */
            set_icon_list(pixbufs: GdkPixbuf.Pixbuf[]): void;
            /**
             * Windows may have a name used while minimized, distinct from the
             * name they display in their titlebar. Most of the time this is a bad
             * idea from a user interface standpoint. But you can set such a name
             * with this function, if you like.
             *
             * After calling this with a non-%NULL `name,` calls to gdk_window_set_title()
             * will not update the icon title.
             *
             * Using %NULL for `name` unsets the icon title; further calls to
             * gdk_window_set_title() will again update the icon title as well.
             *
             * Note that some platforms don't support window icons.
             * @param name name of window while iconified (minimized)
             */
            set_icon_name(name?: string | null): void;
            /**
             * Set if `window` must be kept above other windows. If the
             * window was already above, then this function does nothing.
             *
             * On X11, asks the window manager to keep `window` above, if the window
             * manager supports this operation. Not all window managers support
             * this, and some deliberately ignore it or don’t have a concept of
             * “keep above”; so you can’t rely on the window being kept above.
             * But it will happen with most standard window managers,
             * and GDK makes a best effort to get it to happen.
             * @param setting whether to keep @window above other windows
             */
            set_keep_above(setting: boolean): void;
            /**
             * Set if `window` must be kept below other windows. If the
             * window was already below, then this function does nothing.
             *
             * On X11, asks the window manager to keep `window` below, if the window
             * manager supports this operation. Not all window managers support
             * this, and some deliberately ignore it or don’t have a concept of
             * “keep below”; so you can’t rely on the window being kept below.
             * But it will happen with most standard window managers,
             * and GDK makes a best effort to get it to happen.
             * @param setting whether to keep @window below other windows
             */
            set_keep_below(setting: boolean): void;
            /**
             * The application can use this hint to tell the window manager
             * that a certain window has modal behaviour. The window manager
             * can use this information to handle modal windows in a special
             * way.
             *
             * You should only use this on windows for which you have
             * previously called gdk_window_set_transient_for()
             * @param modal %TRUE if the window is modal, %FALSE otherwise.
             */
            set_modal_hint(modal: boolean): void;
            /**
             * Set `window` to render as partially transparent,
             * with opacity 0 being fully transparent and 1 fully opaque. (Values
             * of the opacity parameter are clamped to the [0,1] range.)
             *
             * For toplevel windows this depends on support from the windowing system
             * that may not always be there. For instance, On X11, this works only on
             * X screens with a compositing manager running. On Wayland, there is no
             * per-window opacity value that the compositor would apply. Instead, use
             * `gdk_window_set_opaque_region (window, NULL)` to tell the compositor
             * that the entire window is (potentially) non-opaque, and draw your content
             * with alpha, or use gtk_widget_set_opacity() to set an overall opacity
             * for your widgets.
             *
             * For child windows this function only works for non-native windows.
             *
             * For setting up per-pixel alpha topelevels, see gdk_screen_get_rgba_visual(),
             * and for non-toplevels, see gdk_window_set_composited().
             *
             * Support for non-toplevel windows was added in 3.8.
             * @param opacity opacity
             */
            set_opacity(opacity: number): void;
            /**
             * For optimisation purposes, compositing window managers may
             * like to not draw obscured regions of windows, or turn off blending
             * during for these regions. With RGB windows with no transparency,
             * this is just the shape of the window, but with ARGB32 windows, the
             * compositor does not know what regions of the window are transparent
             * or not.
             *
             * This function only works for toplevel windows.
             *
             * GTK+ will update this property automatically if
             * the `window` background is opaque, as we know where the opaque regions
             * are. If your window background is not opaque, please update this
             * property in your #GtkWidget::style-updated handler.
             * @param region a region, or %NULL
             */
            set_opaque_region(region?: cairo.Region | null): void;
            /**
             * An override redirect window is not under the control of the window manager.
             * This means it won’t have a titlebar, won’t be minimizable, etc. - it will
             * be entirely under the control of the application. The window manager
             * can’t see the override redirect window at all.
             *
             * Override redirect should only be used for short-lived temporary
             * windows, such as popup menus. #GtkMenu uses an override redirect
             * window in its implementation, for example.
             * @param override_redirect %TRUE if window should be override redirect
             */
            set_override_redirect(override_redirect: boolean): void;
            /**
             * Sets whether input to the window is passed through to the window
             * below.
             *
             * The default value of this is %FALSE, which means that pointer
             * events that happen inside the window are send first to the window,
             * but if the event is not selected by the event mask then the event
             * is sent to the parent window, and so on up the hierarchy.
             *
             * If `pass_through` is %TRUE then such pointer events happen as if the
             * window wasn't there at all, and thus will be sent first to any
             * windows below `window`. This is useful if the window is used in a
             * transparent fashion. In the terminology of the web this would be called
             * "pointer-events: none".
             *
             * Note that a window with `pass_through` %TRUE can still have a subwindow
             * without pass through, so you can get events on a subset of a window. And in
             * that cases you would get the in-between related events such as the pointer
             * enter/leave events on its way to the destination window.
             * @param pass_through a boolean
             */
            set_pass_through(pass_through: boolean): void;
            /**
             * When using GTK+, typically you should use gtk_window_set_role() instead
             * of this low-level function.
             *
             * The window manager and session manager use a window’s role to
             * distinguish it from other kinds of window in the same application.
             * When an application is restarted after being saved in a previous
             * session, all windows with the same title and role are treated as
             * interchangeable.  So if you have two windows with the same title
             * that should be distinguished for session management purposes, you
             * should set the role on those windows. It doesn’t matter what string
             * you use for the role, as long as you have a different role for each
             * non-interchangeable kind of window.
             * @param role a string indicating its role
             */
            set_role(role: string): void;
            /**
             * Newer GTK+ windows using client-side decorations use extra geometry
             * around their frames for effects like shadows and invisible borders.
             * Window managers that want to maximize windows or snap to edges need
             * to know where the extents of the actual frame lie, so that users
             * don’t feel like windows are snapping against random invisible edges.
             *
             * Note that this property is automatically updated by GTK+, so this
             * function should only be used by applications which do not use GTK+
             * to create toplevel windows.
             * @param left The left extent
             * @param right The right extent
             * @param top The top extent
             * @param bottom The bottom extent
             */
            set_shadow_width(left: number, right: number, top: number, bottom: number): void;
            /**
             * Toggles whether a window should appear in a pager (workspace
             * switcher, or other desktop utility program that displays a small
             * thumbnail representation of the windows on the desktop). If a
             * window’s semantic type as specified with gdk_window_set_type_hint()
             * already fully describes the window, this function should
             * not be called in addition, instead you should
             * allow the window to be treated according to standard policy for
             * its semantic type.
             * @param skips_pager %TRUE to skip the pager
             */
            set_skip_pager_hint(skips_pager: boolean): void;
            /**
             * Toggles whether a window should appear in a task list or window
             * list. If a window’s semantic type as specified with
             * gdk_window_set_type_hint() already fully describes the window, this
             * function should not be called in addition,
             * instead you should allow the window to be treated according to
             * standard policy for its semantic type.
             * @param skips_taskbar %TRUE to skip the taskbar
             */
            set_skip_taskbar_hint(skips_taskbar: boolean): void;
            /**
             * Sets the event mask for any floating device (i.e. not attached to any
             * visible pointer) that has the source defined as `source`. This event
             * mask will be applied both to currently existing, newly added devices
             * after this call, and devices being attached/detached.
             * @param source a #GdkInputSource to define the source class.
             * @param event_mask event mask for @window
             */
            set_source_events(source: InputSource | null, event_mask: EventMask | null): void;
            /**
             * When using GTK+, typically you should use gtk_window_set_startup_id()
             * instead of this low-level function.
             * @param startup_id a string with startup-notification identifier
             */
            set_startup_id(startup_id: string): void;
            /**
             * Used to set the bit gravity of the given window to static, and flag
             * it so all children get static subwindow gravity. This is used if you
             * are implementing scary features that involve deep knowledge of the
             * windowing system. Don’t worry about it.
             * @param use_static %TRUE to turn on static gravity
             * @returns %FALSE
             */
            set_static_gravities(use_static: boolean): boolean;
            /**
             * This function will enable multidevice features in `window`.
             *
             * Multidevice aware windows will need to handle properly multiple,
             * per device enter/leave events, device grabs and grab ownerships.
             * @param support_multidevice %TRUE to enable multidevice support in @window.
             */
            set_support_multidevice(support_multidevice: boolean): void;
            /**
             * Sets the title of a toplevel window, to be displayed in the titlebar.
             * If you haven’t explicitly set the icon name for the window
             * (using gdk_window_set_icon_name()), the icon name will be set to
             * `title` as well. `title` must be in UTF-8 encoding (as with all
             * user-readable strings in GDK/GTK+). `title` may not be %NULL.
             * @param title title of @window
             */
            set_title(title: string): void;
            /**
             * Indicates to the window manager that `window` is a transient dialog
             * associated with the application window `parent`. This allows the
             * window manager to do things like center `window` on `parent` and
             * keep `window` above `parent`.
             *
             * See gtk_window_set_transient_for() if you’re using #GtkWindow or
             * #GtkDialog.
             * @param parent another toplevel #GdkWindow
             */
            set_transient_for(parent: Window): void;
            /**
             * The application can use this call to provide a hint to the window
             * manager about the functionality of a window. The window manager
             * can use this information when determining the decoration and behaviour
             * of the window.
             *
             * The hint must be set before the window is mapped.
             * @param hint A hint of the function this window will have
             */
            set_type_hint(hint: WindowTypeHint | null): void;
            /**
             * Toggles whether a window needs the user's
             * urgent attention.
             * @param urgent %TRUE if the window is urgent
             */
            set_urgency_hint(urgent: boolean): void;
            /**
             * For most purposes this function is deprecated in favor of
             * g_object_set_data(). However, for historical reasons GTK+ stores
             * the #GtkWidget that owns a #GdkWindow as user data on the
             * #GdkWindow. So, custom widget implementations should use
             * this function for that. If GTK+ receives an event for a #GdkWindow,
             * and the user data for the window is non-%NULL, GTK+ will assume the
             * user data is a #GtkWidget, and forward the event to that widget.
             * @param user_data user data
             */
            set_user_data(user_data?: GObject.Object | null): void;
            /**
             * Makes pixels in `window` outside `shape_region` be transparent,
             * so that the window may be nonrectangular.
             *
             * If `shape_region` is %NULL, the shape will be unset, so the whole
             * window will be opaque again. `offset_x` and `offset_y` are ignored
             * if `shape_region` is %NULL.
             *
             * On the X11 platform, this uses an X server extension which is
             * widely available on most common platforms, but not available on
             * very old X servers, and occasionally the implementation will be
             * buggy. On servers without the shape extension, this function
             * will do nothing.
             *
             * This function works on both toplevel and child windows.
             * @param shape_region region of window to be non-transparent
             * @param offset_x X position of @shape_region in @window coordinates
             * @param offset_y Y position of @shape_region in @window coordinates
             */
            shape_combine_region(shape_region: cairo.Region | null, offset_x: number, offset_y: number): void;
            /**
             * Like gdk_window_show_unraised(), but also raises the window to the
             * top of the window stack (moves the window to the front of the
             * Z-order).
             *
             * This function maps a window so it’s visible onscreen. Its opposite
             * is gdk_window_hide().
             *
             * When implementing a #GtkWidget, you should call this function on the widget's
             * #GdkWindow as part of the “map” method.
             */
            show(): void;
            /**
             * Shows a #GdkWindow onscreen, but does not modify its stacking
             * order. In contrast, gdk_window_show() will raise the window
             * to the top of the window stack.
             *
             * On the X11 platform, in Xlib terms, this function calls
             * XMapWindow() (it also updates some internal GDK state, which means
             * that you can’t really use XMapWindow() directly on a GDK window).
             */
            show_unraised(): void;
            /**
             * Asks the windowing system to show the window menu. The window menu
             * is the menu shown when right-clicking the titlebar on traditional
             * windows managed by the window manager. This is useful for windows
             * using client-side decorations, activating it with a right-click
             * on the window decorations.
             * @param event a #GdkEvent to show the menu for
             * @returns %TRUE if the window menu was shown and %FALSE otherwise.
             */
            show_window_menu(event: Event): boolean;
            /**
             * “Pins” a window such that it’s on all workspaces and does not scroll
             * with viewports, for window managers that have scrollable viewports.
             * (When using #GtkWindow, gtk_window_stick() may be more useful.)
             *
             * On the X11 platform, this function depends on window manager
             * support, so may have no effect with many window managers. However,
             * GDK will do the best it can to convince the window manager to stick
             * the window. For window managers that don’t support this operation,
             * there’s nothing you can do to force it to happen.
             */
            stick(): void;
            /**
             * Thaws a window frozen with
             * gdk_window_freeze_toplevel_updates_libgtk_only().
             *
             * This function is not part of the GDK public API and is only
             * for use by GTK+.
             */
            thaw_toplevel_updates_libgtk_only(): void;
            /**
             * Thaws a window frozen with gdk_window_freeze_updates().
             */
            thaw_updates(): void;
            /**
             * Moves the window out of fullscreen mode. If the window was not
             * fullscreen, does nothing.
             *
             * On X11, asks the window manager to move `window` out of the fullscreen
             * state, if the window manager supports this operation. Not all
             * window managers support this, and some deliberately ignore it or
             * don’t have a concept of “fullscreen”; so you can’t rely on the
             * unfullscreenification actually happening. But it will happen with
             * most standard window managers, and GDK makes a best effort to get
             * it to happen.
             */
            unfullscreen(): void;
            /**
             * Unmaximizes the window. If the window wasn’t maximized, then this
             * function does nothing.
             *
             * On X11, asks the window manager to unmaximize `window,` if the
             * window manager supports this operation. Not all window managers
             * support this, and some deliberately ignore it or don’t have a
             * concept of “maximized”; so you can’t rely on the unmaximization
             * actually happening. But it will happen with most standard window
             * managers, and GDK makes a best effort to get it to happen.
             *
             * On Windows, reliably unmaximizes the window.
             */
            unmaximize(): void;
            /**
             * Reverse operation for gdk_window_stick(); see gdk_window_stick(),
             * and gtk_window_unstick().
             */
            unstick(): void;
            /**
             * Withdraws a window (unmaps it and asks the window manager to forget about it).
             * This function is not really useful as gdk_window_hide() automatically
             * withdraws toplevel windows before hiding them.
             */
            withdraw(): void;
        }

        /**
         * An opaque type representing a string as an index into a table
         * of strings on the X server.
         */
        abstract class Atom {
            static $gtype: GObject.GType<Atom>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Finds or creates an atom corresponding to a given string.
             * @param atom_name a string.
             * @param only_if_exists if %TRUE, GDK is allowed to not create a new atom, but   just return %GDK_NONE if the requested atom doesn’t already   exists. Currently, the flag is ignored, since checking the   existance of an atom is as expensive as creating it.
             */
            static intern(atom_name: string, only_if_exists: boolean): Atom;
            /**
             * Finds or creates an atom corresponding to a given string.
             *
             * Note that this function is identical to gdk_atom_intern() except
             * that if a new #GdkAtom is created the string itself is used rather
             * than a copy. This saves memory, but can only be used if the string
             * will always exist. It can be used with statically
             * allocated strings in the main program, but not with statically
             * allocated memory in dynamically loaded modules, if you expect to
             * ever unload the module again (e.g. do not use this function in
             * GTK+ theme engines).
             * @param atom_name a static string
             */
            static intern_static_string(atom_name: string): Atom;

            // Methods

            /**
             * Determines the string corresponding to an atom.
             * @returns a newly-allocated string containing the string   corresponding to @atom. When you are done with the   return value, you should free it using g_free().
             */
            name(): string;
        }

        /**
         * A #GdkColor is used to describe a color,
         * similar to the XColor struct used in the X11 drawing API.
         */
        class Color {
            static $gtype: GObject.GType<Color>;

            // Fields

            pixel: number;
            red: number;
            green: number;
            blue: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    pixel: number;
                    red: number;
                    green: number;
                    blue: number;
                }>,
            );
            _init(...args: any[]): void;

            // Static methods

            /**
             * Parses a textual specification of a color and fill in the
             * `red,` `green,` and `blue` fields of a #GdkColor.
             *
             * The string can either one of a large set of standard names
             * (taken from the X11 `rgb.txt` file), or it can be a hexadecimal
             * value in the form “\#rgb” “\#rrggbb”, “\#rrrgggbbb” or
             * “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits of
             * the red, green, and blue components of the color, respectively.
             * (White in the four forms is “\#fff”, “\#ffffff”, “\#fffffffff”
             * and “\#ffffffffffff”).
             * @param spec the string specifying the color
             */
            static parse(spec: string): [boolean, Color];

            // Methods

            /**
             * Makes a copy of a #GdkColor.
             *
             * The result must be freed using gdk_color_free().
             * @returns a copy of @color
             */
            copy(): Color;
            /**
             * Compares two colors.
             * @param colorb another #GdkColor
             * @returns %TRUE if the two colors compare equal
             */
            equal(colorb: Color): boolean;
            /**
             * Frees a #GdkColor created with gdk_color_copy().
             */
            free(): void;
            /**
             * A hash function suitable for using for a hash
             * table that stores #GdkColors.
             * @returns The hash function applied to @color
             */
            hash(): number;
            /**
             * Returns a textual specification of `color` in the hexadecimal
             * form “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits
             * representing the red, green and blue components respectively.
             *
             * The returned string can be parsed by gdk_color_parse().
             * @returns a newly-allocated text string
             */
            to_string(): string;
        }

        type DevicePadInterface = typeof DevicePad;
        type DrawingContextClass = typeof DrawingContext;
        /**
         * Contains the fields which are common to all event structs.
         * Any event pointer can safely be cast to a pointer to a #GdkEventAny to
         * access these fields.
         */
        class EventAny {
            static $gtype: GObject.GType<EventAny>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Used for button press and button release events. The
         * `type` field will be one of %GDK_BUTTON_PRESS,
         * %GDK_2BUTTON_PRESS, %GDK_3BUTTON_PRESS or %GDK_BUTTON_RELEASE,
         *
         * Double and triple-clicks result in a sequence of events being received.
         * For double-clicks the order of events will be:
         *
         * - %GDK_BUTTON_PRESS
         * - %GDK_BUTTON_RELEASE
         * - %GDK_BUTTON_PRESS
         * - %GDK_2BUTTON_PRESS
         * - %GDK_BUTTON_RELEASE
         *
         * Note that the first click is received just like a normal
         * button press, while the second click results in a %GDK_2BUTTON_PRESS
         * being received just after the %GDK_BUTTON_PRESS.
         *
         * Triple-clicks are very similar to double-clicks, except that
         * %GDK_3BUTTON_PRESS is inserted after the third click. The order of the
         * events is:
         *
         * - %GDK_BUTTON_PRESS
         * - %GDK_BUTTON_RELEASE
         * - %GDK_BUTTON_PRESS
         * - %GDK_2BUTTON_PRESS
         * - %GDK_BUTTON_RELEASE
         * - %GDK_BUTTON_PRESS
         * - %GDK_3BUTTON_PRESS
         * - %GDK_BUTTON_RELEASE
         *
         * For a double click to occur, the second button press must occur within
         * 1/4 of a second of the first. For a triple click to occur, the third
         * button press must also occur within 1/2 second of the first button press.
         */
        class EventButton {
            static $gtype: GObject.GType<EventButton>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            x: number;
            y: number;
            axes: number;
            state: ModifierType;
            button: number;
            device: Device;
            x_root: number;
            y_root: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated when a window size or position has changed.
         */
        class EventConfigure {
            static $gtype: GObject.GType<EventConfigure>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            x: number;
            y: number;
            width: number;
            height: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated when the pointer enters or leaves a window.
         */
        class EventCrossing {
            static $gtype: GObject.GType<EventCrossing>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            subwindow: Window;
            time: number;
            x: number;
            y: number;
            x_root: number;
            y_root: number;
            mode: CrossingMode;
            detail: NotifyType;
            focus: boolean;
            state: ModifierType;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated during DND operations.
         */
        class EventDND {
            static $gtype: GObject.GType<EventDND>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            context: DragContext;
            time: number;
            x_root: number;
            y_root: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated when all or part of a window becomes visible and needs to be
         * redrawn.
         */
        class EventExpose {
            static $gtype: GObject.GType<EventExpose>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            area: Rectangle;
            count: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Describes a change of keyboard focus.
         */
        class EventFocus {
            static $gtype: GObject.GType<EventFocus>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            'in': number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated when a pointer or keyboard grab is broken. On X11, this happens
         * when the grab window becomes unviewable (i.e. it or one of its ancestors
         * is unmapped), or if the same application grabs the pointer or keyboard
         * again. Note that implicit grabs (which are initiated by button presses)
         * can also cause #GdkEventGrabBroken events.
         */
        class EventGrabBroken {
            static $gtype: GObject.GType<EventGrabBroken>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            keyboard: boolean;
            implicit: boolean;
            grab_window: Window;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Describes a key press or key release event.
         */
        class EventKey {
            static $gtype: GObject.GType<EventKey>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            state: ModifierType;
            keyval: number;
            length: number;
            string: string;
            hardware_keycode: number;
            group: number;
            is_modifier: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated when the pointer moves.
         */
        class EventMotion {
            static $gtype: GObject.GType<EventMotion>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            x: number;
            y: number;
            axes: number;
            state: ModifierType;
            is_hint: number;
            device: Device;
            x_root: number;
            y_root: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated when the owner of a selection changes. On X11, this
         * information is only available if the X server supports the XFIXES
         * extension.
         */
        class EventOwnerChange {
            static $gtype: GObject.GType<EventOwnerChange>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            owner: Window;
            reason: OwnerChange;
            time: number;
            selection_time: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated during %GDK_SOURCE_TABLET_PAD interaction with tactile sensors.
         */
        class EventPadAxis {
            static $gtype: GObject.GType<EventPadAxis>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            group: number;
            index: number;
            mode: number;
            value: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated during %GDK_SOURCE_TABLET_PAD button presses and releases.
         */
        class EventPadButton {
            static $gtype: GObject.GType<EventPadButton>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            group: number;
            button: number;
            mode: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated during %GDK_SOURCE_TABLET_PAD mode switches in a group.
         */
        class EventPadGroupMode {
            static $gtype: GObject.GType<EventPadGroupMode>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            group: number;
            mode: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Describes a property change on a window.
         */
        class EventProperty {
            static $gtype: GObject.GType<EventProperty>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            state: PropertyState;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Proximity events are generated when using GDK’s wrapper for the
         * XInput extension. The XInput extension is an add-on for standard X
         * that allows you to use nonstandard devices such as graphics tablets.
         * A proximity event indicates that the stylus has moved in or out of
         * contact with the tablet, or perhaps that the user’s finger has moved
         * in or out of contact with a touch screen.
         *
         * This event type will be used pretty rarely. It only is important for
         * XInput aware programs that are drawing their own cursor.
         */
        class EventProximity {
            static $gtype: GObject.GType<EventProximity>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            device: Device;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated from button presses for the buttons 4 to 7. Wheel mice are
         * usually configured to generate button press events for buttons 4 and 5
         * when the wheel is turned.
         *
         * Some GDK backends can also generate “smooth” scroll events, which
         * can be recognized by the %GDK_SCROLL_SMOOTH scroll direction. For
         * these, the scroll deltas can be obtained with
         * gdk_event_get_scroll_deltas().
         */
        class EventScroll {
            static $gtype: GObject.GType<EventScroll>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            x: number;
            y: number;
            state: ModifierType;
            direction: ScrollDirection;
            device: Device;
            x_root: number;
            y_root: number;
            delta_x: number;
            delta_y: number;
            is_stop: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated when a selection is requested or ownership of a selection
         * is taken over by another client application.
         */
        class EventSelection {
            static $gtype: GObject.GType<EventSelection>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            requestor: Window;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class EventSequence {
            static $gtype: GObject.GType<EventSequence>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated when a setting is modified.
         */
        class EventSetting {
            static $gtype: GObject.GType<EventSetting>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            action: SettingAction;
            name: string;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Used for touch events.
         * `type` field will be one of %GDK_TOUCH_BEGIN, %GDK_TOUCH_UPDATE,
         * %GDK_TOUCH_END or %GDK_TOUCH_CANCEL.
         *
         * Touch events are grouped into sequences by means of the `sequence`
         * field, which can also be obtained with gdk_event_get_event_sequence().
         * Each sequence begins with a %GDK_TOUCH_BEGIN event, followed by
         * any number of %GDK_TOUCH_UPDATE events, and ends with a %GDK_TOUCH_END
         * (or %GDK_TOUCH_CANCEL) event. With multitouch devices, there may be
         * several active sequences at the same time.
         */
        class EventTouch {
            static $gtype: GObject.GType<EventTouch>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            time: number;
            x: number;
            y: number;
            axes: number;
            state: ModifierType;
            emulating_pointer: boolean;
            device: Device;
            x_root: number;
            y_root: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated during touchpad swipe gestures.
         */
        class EventTouchpadPinch {
            static $gtype: GObject.GType<EventTouchpadPinch>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            phase: number;
            n_fingers: number;
            time: number;
            x: number;
            y: number;
            dx: number;
            dy: number;
            angle_delta: number;
            scale: number;
            x_root: number;
            y_root: number;
            state: ModifierType;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated during touchpad swipe gestures.
         */
        class EventTouchpadSwipe {
            static $gtype: GObject.GType<EventTouchpadSwipe>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            phase: number;
            n_fingers: number;
            time: number;
            x: number;
            y: number;
            dx: number;
            dy: number;
            x_root: number;
            y_root: number;
            state: ModifierType;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated when the window visibility status has changed.
         */
        class EventVisibility {
            static $gtype: GObject.GType<EventVisibility>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            state: VisibilityState;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Generated when the state of a toplevel window changes.
         */
        class EventWindowState {
            static $gtype: GObject.GType<EventWindowState>;

            // Fields

            type: EventType;
            window: Window;
            send_event: number;
            changed_mask: WindowState;
            new_window_state: WindowState;

            // Constructors

            _init(...args: any[]): void;
        }

        type FrameClockClass = typeof FrameClock;
        abstract class FrameClockPrivate {
            static $gtype: GObject.GType<FrameClockPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A #GdkFrameTimings object holds timing information for a single frame
         * of the application’s displays. To retrieve #GdkFrameTimings objects,
         * use gdk_frame_clock_get_timings() or gdk_frame_clock_get_current_timings().
         * The information in #GdkFrameTimings is useful for precise synchronization
         * of video with the event or audio streams, and for measuring
         * quality metrics for the application’s display, such as latency and jitter.
         */
        abstract class FrameTimings {
            static $gtype: GObject.GType<FrameTimings>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * The timing information in a #GdkFrameTimings is filled in
             * incrementally as the frame as drawn and passed off to the
             * window system for processing and display to the user. The
             * accessor functions for #GdkFrameTimings can return 0 to
             * indicate an unavailable value for two reasons: either because
             * the information is not yet available, or because it isn't
             * available at all. Once gdk_frame_timings_get_complete() returns
             * %TRUE for a frame, you can be certain that no further values
             * will become available and be stored in the #GdkFrameTimings.
             * @returns %TRUE if all information that will be available  for the frame has been filled in.
             */
            get_complete(): boolean;
            /**
             * Gets the frame counter value of the #GdkFrameClock when this
             * this frame was drawn.
             * @returns the frame counter value for this frame
             */
            get_frame_counter(): number;
            /**
             * Returns the frame time for the frame. This is the time value
             * that is typically used to time animations for the frame. See
             * gdk_frame_clock_get_frame_time().
             * @returns the frame time for the frame, in the timescale  of g_get_monotonic_time()
             */
            get_frame_time(): number;
            /**
             * Gets the predicted time at which this frame will be displayed. Although
             * no predicted time may be available, if one is available, it will
             * be available while the frame is being generated, in contrast to
             * gdk_frame_timings_get_presentation_time(), which is only available
             * after the frame has been presented. In general, if you are simply
             * animating, you should use gdk_frame_clock_get_frame_time() rather
             * than this function, but this function is useful for applications
             * that want exact control over latency. For example, a movie player
             * may want this information for Audio/Video synchronization.
             * @returns The predicted time at which the frame will be presented,  in the timescale of g_get_monotonic_time(), or 0 if no predicted  presentation time is available.
             */
            get_predicted_presentation_time(): number;
            /**
             * Reurns the presentation time. This is the time at which the frame
             * became visible to the user.
             * @returns the time the frame was displayed to the user, in the  timescale of g_get_monotonic_time(), or 0 if no presentation  time is available. See gdk_frame_timings_get_complete()
             */
            get_presentation_time(): number;
            /**
             * Gets the natural interval between presentation times for
             * the display that this frame was displayed on. Frame presentation
             * usually happens during the “vertical blanking interval”.
             * @returns the refresh interval of the display, in microseconds,  or 0 if the refresh interval is not available.  See gdk_frame_timings_get_complete().
             */
            get_refresh_interval(): number;
            /**
             * Increases the reference count of `timings`.
             * @returns @timings
             */
            ref(): FrameTimings;
            /**
             * Decreases the reference count of `timings`. If `timings`
             * is no longer referenced, it will be freed.
             */
            unref(): void;
        }

        /**
         * The #GdkGeometry struct gives the window manager information about
         * a window’s geometry constraints. Normally you would set these on
         * the GTK+ level using gtk_window_set_geometry_hints(). #GtkWindow
         * then sets the hints on the #GdkWindow it creates.
         *
         * gdk_window_set_geometry_hints() expects the hints to be fully valid already
         * and simply passes them to the window manager; in contrast,
         * gtk_window_set_geometry_hints() performs some interpretation. For example,
         * #GtkWindow will apply the hints to the geometry widget instead of the
         * toplevel window, if you set a geometry widget. Also, the
         * `min_width/``min_height/``max_width/``max_height` fields may be set to -1, and
         * #GtkWindow will substitute the size request of the window or geometry widget.
         * If the minimum size hint is not provided, #GtkWindow will use its requisition
         * as the minimum size. If the minimum size is provided and a geometry widget is
         * set, #GtkWindow will take the minimum size as the minimum size of the
         * geometry widget rather than the entire window. The base size is treated
         * similarly.
         *
         * The canonical use-case for gtk_window_set_geometry_hints() is to get a
         * terminal widget to resize properly. Here, the terminal text area should be
         * the geometry widget; #GtkWindow will then automatically set the base size to
         * the size of other widgets in the terminal window, such as the menubar and
         * scrollbar. Then, the `width_inc` and `height_inc` fields should be set to the
         * size of one character in the terminal. Finally, the base size should be set
         * to the size of one character. The net effect is that the minimum size of the
         * terminal will have a 1x1 character terminal area, and only terminal sizes on
         * the “character grid” will be allowed.
         *
         * Here’s an example of how the terminal example would be implemented, assuming
         * a terminal area widget called “terminal” and a toplevel window “toplevel”:
         *
         *
         * ```c
         * 	GdkGeometry hints;
         *
         * 	hints.base_width = terminal->char_width;
         *         hints.base_height = terminal->char_height;
         *         hints.min_width = terminal->char_width;
         *         hints.min_height = terminal->char_height;
         *         hints.width_inc = terminal->char_width;
         *         hints.height_inc = terminal->char_height;
         *
         *  gtk_window_set_geometry_hints (GTK_WINDOW (toplevel),
         *                                 GTK_WIDGET (terminal),
         *                                 &hints,
         *                                 GDK_HINT_RESIZE_INC |
         *                                 GDK_HINT_MIN_SIZE |
         *                                 GDK_HINT_BASE_SIZE);
         * ```
         *
         *
         * The other useful fields are the `min_aspect` and `max_aspect` fields; these
         * contain a width/height ratio as a floating point number. If a geometry widget
         * is set, the aspect applies to the geometry widget rather than the entire
         * window. The most common use of these hints is probably to set `min_aspect` and
         * `max_aspect` to the same value, thus forcing the window to keep a constant
         * aspect ratio.
         */
        class Geometry {
            static $gtype: GObject.GType<Geometry>;

            // Fields

            min_width: number;
            min_height: number;
            max_width: number;
            max_height: number;
            base_width: number;
            base_height: number;
            width_inc: number;
            height_inc: number;
            min_aspect: number;
            max_aspect: number;
            win_gravity: Gravity;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A #GdkKeymapKey is a hardware key that can be mapped to a keyval.
         */
        class KeymapKey {
            static $gtype: GObject.GType<KeymapKey>;

            // Fields

            keycode: number;
            group: number;
            level: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    keycode: number;
                    group: number;
                    level: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        type MonitorClass = typeof Monitor;
        /**
         * Defines the x and y coordinates of a point.
         */
        class Point {
            static $gtype: GObject.GType<Point>;

            // Fields

            x: number;
            y: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * A #GdkRGBA is used to represent a (possibly translucent)
         * color, in a way that is compatible with cairo’s notion of color.
         */
        class RGBA {
            static $gtype: GObject.GType<RGBA>;

            // Fields

            red: number;
            green: number;
            blue: number;
            alpha: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    red: number;
                    green: number;
                    blue: number;
                    alpha: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Makes a copy of a #GdkRGBA.
             *
             * The result must be freed through gdk_rgba_free().
             * @returns A newly allocated #GdkRGBA, with the same contents as @rgba
             */
            copy(): RGBA;
            /**
             * Compares two RGBA colors.
             * @param p2 another #GdkRGBA pointer
             * @returns %TRUE if the two colors compare equal
             */
            equal(p2: RGBA): boolean;
            /**
             * Frees a #GdkRGBA created with gdk_rgba_copy()
             */
            free(): void;
            /**
             * A hash function suitable for using for a hash
             * table that stores #GdkRGBAs.
             * @returns The hash value for @p
             */
            hash(): number;
            /**
             * Parses a textual representation of a color, filling in
             * the `red,` `green,` `blue` and `alpha` fields of the `rgba` #GdkRGBA.
             *
             * The string can be either one of:
             * - A standard name (Taken from the X11 rgb.txt file).
             * - A hexadecimal value in the form “\#rgb”, “\#rrggbb”,
             *   “\#rrrgggbbb” or ”\#rrrrggggbbbb”
             * - A RGB color in the form “rgb(r,g,b)” (In this case the color will
             *   have full opacity)
             * - A RGBA color in the form “rgba(r,g,b,a)”
             *
             * Where “r”, “g”, “b” and “a” are respectively the red, green, blue and
             * alpha color values. In the last two cases, “r”, “g”, and “b” are either integers
             * in the range 0 to 255 or percentage values in the range 0% to 100%, and
             * a is a floating point value in the range 0 to 1.
             * @param spec the string specifying the color
             * @returns %TRUE if the parsing succeeded
             */
            parse(spec: string): boolean;
            /**
             * Returns a textual specification of `rgba` in the form
             * `rgb(r,g,b)` or
             * `rgba(r g,b,a)`,
             * where “r”, “g”, “b” and “a” represent the red, green,
             * blue and alpha values respectively. “r”, “g”, and “b” are
             * represented as integers in the range 0 to 255, and “a”
             * is represented as a floating point value in the range 0 to 1.
             *
             * These string forms are string forms that are supported by
             * the CSS3 colors module, and can be parsed by gdk_rgba_parse().
             *
             * Note that this string representation may lose some
             * precision, since “r”, “g” and “b” are represented as 8-bit
             * integers. If this is a concern, you should use a
             * different representation.
             * @returns A newly allocated text string
             */
            to_string(): string;
        }

        /**
         * Defines the position and size of a rectangle. It is identical to
         * #cairo_rectangle_int_t.
         */
        class Rectangle {
            static $gtype: GObject.GType<Rectangle>;

            // Fields

            x: number;
            y: number;
            width: number;
            height: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                    width: number;
                    height: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Checks if the two given rectangles are equal.
             * @param rect2 a #GdkRectangle
             * @returns %TRUE if the rectangles are equal.
             */
            equal(rect2: Rectangle): boolean;
            /**
             * Calculates the intersection of two rectangles. It is allowed for
             * `dest` to be the same as either `src1` or `src2`. If the rectangles
             * do not intersect, `dest’`s width and height is set to 0 and its x
             * and y values are undefined. If you are only interested in whether
             * the rectangles intersect, but not in the intersecting area itself,
             * pass %NULL for `dest`.
             * @param src2 a #GdkRectangle
             * @returns %TRUE if the rectangles intersect.
             */
            intersect(src2: Rectangle): [boolean, Rectangle | null];
            /**
             * Calculates the union of two rectangles.
             * The union of rectangles `src1` and `src2` is the smallest rectangle which
             * includes both `src1` and `src2` within it.
             * It is allowed for `dest` to be the same as either `src1` or `src2`.
             *
             * Note that this function does not ignore 'empty' rectangles (ie. with
             * zero width or height).
             * @param src2 a #GdkRectangle
             */
            union(src2: Rectangle): Rectangle;
        }

        /**
         * A #GdkTimeCoord stores a single event in a motion history.
         */
        class TimeCoord {
            static $gtype: GObject.GType<TimeCoord>;

            // Fields

            time: number;
            axes: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    time: number;
                    axes: number[];
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Attributes to use for a newly-created window.
         */
        class WindowAttr {
            static $gtype: GObject.GType<WindowAttr>;

            // Fields

            title: string;
            event_mask: number;
            x: number;
            y: number;
            width: number;
            height: number;
            wclass: WindowWindowClass;
            visual: Visual;
            window_type: WindowType;
            cursor: Cursor;
            wmclass_name: string;
            wmclass_class: string;
            override_redirect: boolean;
            type_hint: WindowTypeHint;

            // Constructors

            _init(...args: any[]): void;
        }

        type WindowClass = typeof Window;
        abstract class WindowRedirect {
            static $gtype: GObject.GType<WindowRedirect>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A #GdkEvent contains a union of all of the event types,
         * and allows access to the data fields in a number of ways.
         *
         * The event type is always the first field in all of the event types, and
         * can always be accessed with the following code, no matter what type of
         * event it is:
         *
         * ```c
         *   GdkEvent *event;
         *   GdkEventType type;
         *
         *   type = event->type;
         * ```
         *
         *
         * To access other fields of the event, the pointer to the event
         * can be cast to the appropriate event type, or the union member
         * name can be used. For example if the event type is %GDK_BUTTON_PRESS
         * then the x coordinate of the button press can be accessed with:
         *
         * ```c
         *   GdkEvent *event;
         *   gdouble x;
         *
         *   x = ((GdkEventButton*)event)->x;
         * ```
         *
         * or:
         *
         * ```c
         *   GdkEvent *event;
         *   gdouble x;
         *
         *   x = event->button.x;
         * ```
         *
         */
        class Event {
            static $gtype: GObject.GType<Event>;

            // Fields

            type: EventType;

            // Constructors

            constructor(type: EventType);
            _init(...args: any[]): void;

            static ['new'](type: EventType): Event;

            // Static methods

            /**
             * Checks all open displays for a #GdkEvent to process,to be processed
             * on, fetching events from the windowing system if necessary.
             * See gdk_display_get_event().
             */
            static get(): Event | null;
            /**
             * Sets the function to call to handle all events from GDK.
             *
             * Note that GTK+ uses this to install its own event handler, so it is
             * usually not useful for GTK+ applications. (Although an application
             * can call this function then call gtk_main_do_event() to pass
             * events to GTK+.)
             * @param func the function to call to handle events from GDK.
             */
            static handler_set(func: EventFunc): void;
            /**
             * If there is an event waiting in the event queue of some open
             * display, returns a copy of it. See gdk_display_peek_event().
             */
            static peek(): Event | null;
            /**
             * Request more motion notifies if `event` is a motion notify hint event.
             *
             * This function should be used instead of gdk_window_get_pointer() to
             * request further motion notifies, because it also works for extension
             * events where motion notifies are provided for devices other than the
             * core pointer. Coordinate extraction, processing and requesting more
             * motion events from a %GDK_MOTION_NOTIFY event usually works like this:
             *
             *
             * ```c
             * {
             *   // motion_event handler
             *   x = motion_event->x;
             *   y = motion_event->y;
             *   // handle (x,y) motion
             *   gdk_event_request_motions (motion_event); // handles is_hint events
             * }
             * ```
             *
             * @param event a valid #GdkEvent
             */
            static request_motions(event: EventMotion): void;

            // Methods

            /**
             * If both events contain X/Y information, this function will return %TRUE
             * and return in `angle` the relative angle from `event1` to `event2`. The rotation
             * direction for positive angles is from the positive X axis towards the positive
             * Y axis.
             * @param event2 second #GdkEvent
             * @returns %TRUE if the angle could be calculated.
             */
            _get_angle(event2: Event): [boolean, number];
            /**
             * If both events contain X/Y information, the center of both coordinates
             * will be returned in `x` and `y`.
             * @param event2 second #GdkEvent
             * @returns %TRUE if the center could be calculated.
             */
            _get_center(event2: Event): [boolean, number, number];
            /**
             * If both events have X/Y information, the distance between both coordinates
             * (as in a straight line going from `event1` to `event2`) will be returned.
             * @param event2 second #GdkEvent
             * @returns %TRUE if the distance could be calculated.
             */
            _get_distance(event2: Event): [boolean, number];
            /**
             * Copies a #GdkEvent, copying or incrementing the reference count of the
             * resources associated with it (e.g. #GdkWindow’s and strings).
             * @returns a copy of @event. The returned #GdkEvent should be freed with gdk_event_free().
             */
            copy(): Event;
            /**
             * Frees a #GdkEvent, freeing or decrementing any resources associated with it.
             * Note that this function should only be called with events returned from
             * functions such as gdk_event_peek(), gdk_event_get(), gdk_event_copy()
             * and gdk_event_new().
             */
            free(): void;
            /**
             * Extract the axis value for a particular axis use from
             * an event structure.
             * @param axis_use the axis use to look for
             * @returns %TRUE if the specified axis was found, otherwise %FALSE
             */
            get_axis(axis_use: AxisUse | null): [boolean, number];
            /**
             * Extract the button number from an event.
             * @returns %TRUE if the event delivered a button number
             */
            get_button(): [boolean, number];
            /**
             * Extracts the click count from an event.
             * @returns %TRUE if the event delivered a click count
             */
            get_click_count(): [boolean, number];
            /**
             * Extract the event window relative x/y coordinates from an event.
             * @returns %TRUE if the event delivered event window coordinates
             */
            get_coords(): [boolean, number, number];
            /**
             * If the event contains a “device” field, this function will return
             * it, else it will return %NULL.
             * @returns a #GdkDevice, or %NULL.
             */
            get_device(): Device | null;
            /**
             * If the event was generated by a device that supports
             * different tools (eg. a tablet), this function will
             * return a #GdkDeviceTool representing the tool that
             * caused the event. Otherwise, %NULL will be returned.
             *
             * Note: the #GdkDeviceTool<!-- -->s will be constant during
             * the application lifetime, if settings must be stored
             * persistently across runs, see gdk_device_tool_get_serial()
             * @returns The current device tool, or %NULL
             */
            get_device_tool(): DeviceTool;
            /**
             * If `event` if of type %GDK_TOUCH_BEGIN, %GDK_TOUCH_UPDATE,
             * %GDK_TOUCH_END or %GDK_TOUCH_CANCEL, returns the #GdkEventSequence
             * to which the event belongs. Otherwise, return %NULL.
             * @returns the event sequence that the event belongs to
             */
            get_event_sequence(): EventSequence;
            /**
             * Retrieves the type of the event.
             * @returns a #GdkEventType
             */
            get_event_type(): EventType;
            /**
             * Extracts the hardware keycode from an event.
             *
             * Also see gdk_event_get_scancode().
             * @returns %TRUE if the event delivered a hardware keycode
             */
            get_keycode(): [boolean, number];
            /**
             * Extracts the keyval from an event.
             * @returns %TRUE if the event delivered a key symbol
             */
            get_keyval(): [boolean, number];
            /**
             * #event: a #GdkEvent
             * Returns whether this event is an 'emulated' pointer event (typically
             * from a touch event), as opposed to a real one.
             * @returns %TRUE if this event is emulated
             */
            get_pointer_emulated(): boolean;
            /**
             * Extract the root window relative x/y coordinates from an event.
             * @returns %TRUE if the event delivered root window coordinates
             */
            get_root_coords(): [boolean, number, number];
            /**
             * Gets the keyboard low-level scancode of a key event.
             *
             * This is usually hardware_keycode. On Windows this is the high
             * word of WM_KEY{DOWN,UP} lParam which contains the scancode and
             * some extended flags.
             * @returns The associated keyboard scancode or 0
             */
            get_scancode(): number;
            /**
             * Returns the screen for the event. The screen is
             * typically the screen for `event->any.window`, but
             * for events such as mouse events, it is the screen
             * where the pointer was when the event occurs -
             * that is, the screen which has the root window
             * to which `event->motion.x_root` and
             * `event->motion.y_root` are relative.
             * @returns the screen for the event
             */
            get_screen(): Screen;
            /**
             * Retrieves the scroll deltas from a #GdkEvent
             *
             * See also: gdk_event_get_scroll_direction()
             * @returns %TRUE if the event contains smooth scroll information   and %FALSE otherwise
             */
            get_scroll_deltas(): [boolean, number, number];
            /**
             * Extracts the scroll direction from an event.
             *
             * If `event` is not of type %GDK_SCROLL, the contents of `direction`
             * are undefined.
             *
             * If you wish to handle both discrete and smooth scrolling, you
             * should check the return value of this function, or of
             * gdk_event_get_scroll_deltas(); for instance:
             *
             *
             * ```c
             *   GdkScrollDirection direction;
             *   double vscroll_factor = 0.0;
             *   double x_scroll, y_scroll;
             *
             *   if (gdk_event_get_scroll_direction (event, &direction))
             *     {
             *       // Handle discrete scrolling with a known constant delta;
             *       const double delta = 12.0;
             *
             *       switch (direction)
             *         {
             *         case GDK_SCROLL_UP:
             *           vscroll_factor = -delta;
             *           break;
             *         case GDK_SCROLL_DOWN:
             *           vscroll_factor = delta;
             *           break;
             *         default:
             *           // no scrolling
             *           break;
             *         }
             *     }
             *   else if (gdk_event_get_scroll_deltas (event, &x_scroll, &y_scroll))
             *     {
             *       // Handle smooth scrolling directly
             *       vscroll_factor = y_scroll;
             *     }
             * ```
             *
             * @returns %TRUE if the event delivered a scroll direction   and %FALSE otherwise
             */
            get_scroll_direction(): [boolean, ScrollDirection];
            /**
             * Returns the #GdkSeat this event was generated for.
             * @returns The #GdkSeat of this event
             */
            get_seat(): Seat;
            /**
             * This function returns the hardware (slave) #GdkDevice that has
             * triggered the event, falling back to the virtual (master) device
             * (as in gdk_event_get_device()) if the event wasn’t caused by
             * interaction with a hardware device. This may happen for example
             * in synthesized crossing events after a #GdkWindow updates its
             * geometry or a grab is acquired/released.
             *
             * If the event does not contain a device field, this function will
             * return %NULL.
             * @returns a #GdkDevice, or %NULL.
             */
            get_source_device(): Device | null;
            /**
             * If the event contains a “state” field, puts that field in `state`. Otherwise
             * stores an empty state (0). Returns %TRUE if there was a state field
             * in the event. `event` may be %NULL, in which case it’s treated
             * as if the event had no state field.
             * @returns %TRUE if there was a state field in the event
             */
            get_state(): [boolean, ModifierType];
            /**
             * Returns the time stamp from `event,` if there is one; otherwise
             * returns #GDK_CURRENT_TIME. If `event` is %NULL, returns #GDK_CURRENT_TIME.
             * @returns time stamp field from @event
             */
            get_time(): number;
            /**
             * Extracts the #GdkWindow associated with an event.
             * @returns The #GdkWindow associated with the event
             */
            get_window(): Window;
            /**
             * Check whether a scroll event is a stop scroll event. Scroll sequences
             * with smooth scroll information may provide a stop scroll event once the
             * interaction with the device finishes, e.g. by lifting a finger. This
             * stop scroll event is the signal that a widget may trigger kinetic
             * scrolling based on the current velocity.
             *
             * Stop scroll events always have a a delta of 0/0.
             * @returns %TRUE if the event is a scroll stop event
             */
            is_scroll_stop_event(): boolean;
            /**
             * Appends a copy of the given event onto the front of the event
             * queue for event->any.window’s display, or the default event
             * queue if event->any.window is %NULL. See gdk_display_put_event().
             */
            put(): void;
            /**
             * Sets the device for `event` to `device`. The event must
             * have been allocated by GTK+, for instance, by
             * gdk_event_copy().
             * @param device a #GdkDevice
             */
            set_device(device: Device): void;
            /**
             * Sets the device tool for this event, should be rarely used.
             * @param tool tool to set on the event, or %NULL
             */
            set_device_tool(tool?: DeviceTool | null): void;
            /**
             * Sets the screen for `event` to `screen`. The event must
             * have been allocated by GTK+, for instance, by
             * gdk_event_copy().
             * @param screen a #GdkScreen
             */
            set_screen(screen: Screen): void;
            /**
             * Sets the slave device for `event` to `device`.
             *
             * The event must have been allocated by GTK+,
             * for instance by gdk_event_copy().
             * @param device a #GdkDevice
             */
            set_source_device(device: Device): void;
            /**
             * This function returns whether a #GdkEventButton should trigger a
             * context menu, according to platform conventions. The right mouse
             * button always triggers context menus. Additionally, if
             * gdk_keymap_get_modifier_mask() returns a non-0 mask for
             * %GDK_MODIFIER_INTENT_CONTEXT_MENU, then the left mouse button will
             * also trigger a context menu if this modifier is pressed.
             *
             * This function should always be used instead of simply checking for
             * event->button == %GDK_BUTTON_SECONDARY.
             * @returns %TRUE if the event should trigger a context menu.
             */
            triggers_context_menu(): boolean;
        }

        namespace DevicePad {
            // Constructor properties interface

            interface ConstructorProps extends Device.ConstructorProps {}
        }

        export interface DevicePadNamespace {
            $gtype: GObject.GType<DevicePad>;
            prototype: DevicePad;
        }
        interface DevicePad extends Device {
            // Methods

            /**
             * Returns the group the given `feature` and `idx` belong to,
             * or -1 if feature/index do not exist in `pad`.
             * @param feature the feature type to get the group from
             * @param feature_idx the index of the feature to get the group from
             * @returns The group number of the queried pad feature.
             */
            get_feature_group(feature: DevicePadFeature | null, feature_idx: number): number;
            /**
             * Returns the number of modes that `group` may have.
             * @param group_idx group to get the number of available modes from
             * @returns The number of modes available in @group.
             */
            get_group_n_modes(group_idx: number): number;
            /**
             * Returns the number of features a tablet pad has.
             * @param feature a pad feature
             * @returns The amount of elements of type @feature that this pad has.
             */
            get_n_features(feature: DevicePadFeature | null): number;
            /**
             * Returns the number of groups this pad device has. Pads have
             * at least one group. A pad group is a subcollection of
             * buttons/strip/rings that is affected collectively by a same
             * current mode.
             * @returns The number of button/ring/strip groups in the pad.
             */
            get_n_groups(): number;
        }

        export const DevicePad: DevicePadNamespace & {
            new (): DevicePad; // This allows `obj instanceof DevicePad`
        };

        type XEvent = void;
        /**
         * Name of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
         */
        const __name__: string;
        /**
         * Version of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
         */
        const __version__: string;
    }

    export default Gdk;
}

declare module 'gi://Gdk' {
    import Gdk30 from 'gi://Gdk?version=3.0';
    export default Gdk30;
}
// END
