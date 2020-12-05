export enum DeviceType {
    //List retrieved from com.oceanwing.battery.cam.binder.model.QueryDeviceData
    BATTERY_DOORBELL = 7,
    BATTERY_DOORBELL_2 = 16,
    CAMERA = 1,
    CAMERA2 = 9,
    CAMERA2C = 8,
    CAMERA2C_PRO = 15,
    CAMERA2_PRO = 14,
    CAMERA_E = 4,
    DOORBELL = 5,
    FLOODLIGHT = 3,
    INDOOR_CAMERA = 30,
    INDOOR_CAMERA_1080 = 34,
    INDOOR_PT_CAMERA = 31,
    INDOOR_PT_CAMERA_1080 = 35,
    KEYPAD = 11,
    LOCK_ADVANCED = 51,
    LOCK_ADVANCED_NO_FINGER = 53,
    LOCK_BASIC = 50,
    LOCK_BASIC_NO_FINGER = 52,
    MOTION_SENSOR = 10,
    SENSOR = 2,
    SOLO_CAMERA = 32,
    SOLO_CAMERA_PRO = 33,
    STATION = 0
}

export enum ParamType {
    //List retrieved from com.oceanwing.battery.cam.binder.model.CameraParams
    CHIME_STATE = 2015,
    DETECT_EXPOSURE = 2023,
    DETECT_MODE = 2004,
    DETECT_MOTION_SENSITIVE = 2005,
    DETECT_SCENARIO = 2028,
    DETECT_SWITCH = 2027,
    DETECT_ZONE = 2006,
    DOORBELL_AUDIO_RECODE = 2042,
    DOORBELL_BRIGHTNESS = 2032,
    DOORBELL_DISTORTION = 2033,
    DOORBELL_HDR = 2029,
    DOORBELL_IR_MODE = 2030,
    DOORBELL_LED_NIGHT_MODE = 2039,
    DOORBELL_MOTION_ADVANCE_OPTION = 2041,
    DOORBELL_MOTION_NOTIFICATION = 2035,
    DOORBELL_NOTIFICATION_JUMP_MODE = 2038,
    DOORBELL_NOTIFICATION_OPEN = 2036,
    DOORBELL_RECORD_QUALITY = 2034,
    DOORBELL_RING_RECORD = 2040,
    DOORBELL_SNOOZE_START_TIME = 2037,
    DOORBELL_VIDEO_QUALITY = 2031,
    NIGHT_VISUAL = 2002,
    OPEN_DEVICE = 2001,
    RINGING_VOLUME = 2022,
    SDCARD = 2010,
    UN_DETECT_ZONE = 2007,
    VOLUME = 2003,

    // Inferred from source
    SNOOZE_MODE = 1271,                         // The value is base64 encoded
    WATERMARK_MODE = 1214,                      // 1 - hide, 2 - show
    DEVICE_UPGRADE_NOW = 1134,
    CAMERA_UPGRADE_NOW = 1133,
    SCHEDULE_MODE = 1257,                       // 0 - Away, 1 - Home, 63 - Disarmed
    GUARD_MODE = 1224,                          // 0 - Away, 1 - Home, 63 - Disarmed, 2 - Schedule

    FLOODLIGHT_MANUAL_SWITCH = 1400,
    FLOODLIGHT_MANUAL_BRIGHTNESS = 1401,        // The range is 22-100
    FLOODLIGHT_MOTION_BRIGHTNESS = 1412,        // The range is 22-100
    FLOODLIGHT_SCHEDULE_BRIGHTNESS = 1413,      // The range is 22-100
    FLOODLIGHT_MOTION_SENSITIVTY = 1272,        // The range is 1-5

    CAMERA_SPEAKER_VOLUME = 1230,
    CAMERA_RECORD_ENABLE_AUDIO = 1366,          // Enable microphone
    CAMERA_RECORD_RETRIGGER_INTERVAL = 1250,    // In seconds
    CAMERA_RECORD_CLIP_LENGTH = 1249,           // In seconds

    CAMERA_IR_CUT = 1013,
    CAMERA_PIR = 1011,
    CAMERA_WIFI_RSSI = 1142,

    CAMERA_MOTION_ZONES = 1204,

    // Set only params?
    PUSH_MSG_MODE = 1252,                       // 0 to ???
}

export enum AlarmMode {
    AWAY = 0,
    HOME = 1,
    DISARMED = 63
}

export enum GuardMode {
    AWAY = 0,
    HOME = 1,
    DISARMED = 63,
    SCHEDULE = 2,
    GEO = 47,
    CUSTOM1 = 3,
    CUSTOM2 = 4,
    CUSTOM3 = 5,
    OFF = 6
}

export enum ResponseErrorCode {
    CODE_CONNECT_ERROR = 997,
    CODE_NEED_VERIFY_CODE = 26052,
    CODE_NETWORK_ERROR = 998,
    CODE_PHONE_NONE_SUPPORT = 26058,
    CODE_SERVER_ERROR = 999,
    CODE_VERIFY_CODE_ERROR = 26050,
    CODE_VERIFY_CODE_EXPIRED = 26051,
    CODE_VERIFY_CODE_MAX = 26053,
    CODE_VERIFY_CODE_NONE_MATCH = 26054,
    CODE_VERIFY_PASSWORD_ERROR = 26055,
    CODE_WHATEVER_ERROR = 0,
    RESP_ERROR_CODE_SESSION_TIMEOUT = 401
}

export enum VerfyCodeTypes {
    TYPE_SMS = 0,
    TYPE_PUSH = 1,
    TYPE_EMAIL = 2
}

export const DeviceStateID = {
    NAME: "name",
    MODEL: "model",
    SERIAL_NUMBER: "serial_number",
    HARDWARE_VERSION: "hardware_version",
    SOFTWARE_VERSION: "software_version",
}

export const CameraStateID = {
    ...DeviceStateID,
    STATE: "state",
    MAC_ADDRESS: "mac_address",
    LAST_CAMERA_URL: "last_camera_url",
    LIVESTREAM: "livestream",
    START_STREAM: "start_stream",
    STOP_STREAM: "stop_stream",
    BATTERY: "battery",
    BATTERY_TEMPERATURE: "battery_temperature",
    LAST_CHARGE_TOTAL_EVENTS: "last_charge_total_events",
    LAST_CHARGE_USED_DAYS: "last_charge_used_days",
    LAST_CHARGE_FILTERED_EVENTS: "last_charge_filtered_events",
    LAST_CHARGE_SAVED_EVENTS: "last_charge_saved_events",
    WIFI_RSSI: "wifi_rssi",
    MOTION_DETECTED: "motion_detected",
    PERSON_DETECTED: "person_detected",
    PERSON_IDENTIFIED: "person_identified",
    CAPTURED_PIC_URL: "captured_pic_url",
}

export const StationStateID = {
    ...DeviceStateID,
    GUARD_MODE: "guard_mode",
    CURRENT_MODE: "current_mode",
    IP_ADDRESS: "ip_address",
    LAN_IP_ADDRESS: "lan_ip_address",
    MAC_ADDRESS: "mac_address",
}

export const EntrySensorStateID = {
    ...DeviceStateID,
    STATE: "state",
    SENSOR_OPEN: "sensor_open",
    LOW_BATTERY: "low_battery",
    SENSOR_CHANGE_TIME: "sensor_change_time",
}

export const MotionSensorStateID = {
    ...DeviceStateID,
    STATE: "state",
    LOW_BATTERY: "low_battery",
    MOTION_DETECTED: "motion_detected",
}

export const KeyPadStateID = {
    ...DeviceStateID,
    STATE: "state",
    LOW_BATTERY: "low_battery",
}

export const DoorbellStateID = {
    ...CameraStateID,
    RINGING: "ringing",
}

export const IndoorCameraStateID = {
    ...CameraStateID,
    CRYING_DETECTED: "crying_detected",
    SOUND_DETECTED: "sound_detected",
    PET_DETECTED: "pet_detected",
}