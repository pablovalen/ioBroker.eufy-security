export const RequestMessageType = {
    STUN:               Buffer.from([0xF1, 0x00]),
    LOOKUP:             Buffer.from([0xF1, 0x20]),
    LOOKUP_WITH_KEY:    Buffer.from([0xF1, 0x26]),
    LOCAL_LOOKUP:       Buffer.from([0xF1, 0x30]),
    PING:               Buffer.from([0xF1, 0xE0]),
    PONG:               Buffer.from([0xF1, 0xE1]),
    CHECK_CAM:          Buffer.from([0xF1, 0x41]),
    DATA:               Buffer.from([0xF1, 0xD0]),
    ACK:                Buffer.from([0xF1, 0xD1]),
    END:                Buffer.from([0xF1, 0xF0])
}

export const ResponseMessageType = {
    STUN:               Buffer.from([0xF1, 0x01]),
    LOOKUP_RESP:        Buffer.from([0xF1, 0x21]),
    LOOKUP_ADDR:        Buffer.from([0xF1, 0x40]),
    LOCAL_LOOKUP_RESP:  Buffer.from([0xF1, 0x41]),
    END:                Buffer.from([0xF1, 0xF0]),
    PONG:               Buffer.from([0xF1, 0xE1]),
    PING:               Buffer.from([0xF1, 0xE0]),
    CAM_ID:             Buffer.from([0xF1, 0x42]),
    ACK:                Buffer.from([0xF1, 0xD1]),
    DATA:               Buffer.from([0xF1, 0xD0])
}

export const EufyP2PDataType = {
    DATA:               Buffer.from([0xD1, 0x00]),
    VIDEO:              Buffer.from([0xD1, 0x01]),
    CONTROL:            Buffer.from([0xD1, 0x02]),
    BINARY:             Buffer.from([0xd1, 0x03])
}

export enum CommandType {
    //com.oceanwing.battery.cam.zmedia.model.CommandType
    ARM_DELAY_AWAY = 1158,
    ARM_DELAY_CUS1 = 1159,
    ARM_DELAY_CUS2 = 1160,
    ARM_DELAY_CUS3 = 1161,
    ARM_DELAY_HOME = 1157,
    AUTOMATION_DATA = 1278,
    AUTOMATION_ID_LIST = 1165,
    CMD_ALARM_DELAY_AWAY = 1167,
    CMD_ALARM_DELAY_CUSTOM1 = 1168,
    CMD_ALARM_DELAY_CUSTOM2 = 1169,
    CMD_ALARM_DELAY_CUSTOM3 = 1170,
    CMD_ALARM_DELAY_HOME = 1166,
    CMD_AUDDEC_SWITCH = 1017,
    CMD_AUDIO_FRAME = 1301,
    CMD_BATCH_RECORD = 1049,
    CMD_BAT_DOORBELL_CHIME_SWITCH = 1702,
    CMD_BAT_DOORBELL_MECHANICAL_CHIME_SWITCH = 1703,
    CMD_BAT_DOORBELL_QUICK_RESPONSE = 1706,
    CMD_BAT_DOORBELL_SET_ELECTRONIC_RINGTONE_TIME = 1709,
    CMD_BAT_DOORBELL_SET_LED_ENABLE = 1716,
    CMD_BAT_DOORBELL_SET_NOTIFICATION_MODE = 1710,
    CMD_BAT_DOORBELL_SET_RINGTONE_VOLUME = 1708,
    CMD_BAT_DOORBELL_UPDATE_QUICK_RESPONSE = 1707,
    CMD_BAT_DOORBELL_VIDEO_QUALITY = 1705,
    CMD_BAT_DOORBELL_WDR_SWITCH = 1704,
    CMD_BIND_BROADCAST = 1000,
    CMD_BIND_SYNC_ACCOUNT_INFO = 1001,
    CMD_BIND_SYNC_ACCOUNT_INFO_EX = 1054,
    CMD_CAMERA_INFO = 1103,
    CMD_CHANGE_PWD = 1030,
    CMD_CHANGE_WIFI_PWD = 1031,
    CMD_CLOSE_AUDDEC = 1018,
    CMD_CLOSE_DEV_LED = 1046,
    CMD_CLOSE_EAS = 1016,
    CMD_CLOSE_IRCUT = 1014,
    CMD_CLOSE_PIR = 1012,
    CMD_COLLECT_RECORD = 1047,
    CMD_CONVERT_MP4_OK = 1303,
    CMD_DECOLLECT_RECORD = 1048,
    CMD_DELLETE_RECORD = 1027,
    CMD_DEL_FACE_PHOTO = 1234,
    CMD_DEL_USER_PHOTO = 1232,
    CMD_DEVS_BIND_BROADCASE = 1038,
    CMD_DEVS_BIND_NOTIFY = 1039,
    CMD_DEVS_LOCK = 1019,
    CMD_DEVS_SWITCH = 1035,             //switch individual cameras on/off; 0 (on) or 1 (off)
    CMD_DEVS_TO_FACTORY = 1037,
    CMD_DEVS_UNBIND = 1040,
    CMD_DEVS_UNLOCK = 1020,
    CMD_DEV_LED_SWITCH = 1045,
    CMD_DEV_PUSHMSG_MODE = 1252,
    CMD_DEV_RECORD_AUTOSTOP = 1251,
    CMD_DEV_RECORD_INTERVAL = 1250,
    CMD_DEV_RECORD_TIMEOUT = 1249,
    CMD_DOENLOAD_FINISH = 1304,
    CMD_DOORBELL_NOTIFY_PAYLOAD = 1701,
    CMD_DOORBELL_SET_PAYLOAD = 1700,
    CMD_DOOR_SENSOR_ALARM_ENABLE = 1506,
    CMD_DOOR_SENSOR_DOOR_EVT = 1503,
    CMD_DOOR_SENSOR_ENABLE_LED = 1505,
    CMD_DOOR_SENSOR_GET_DOOR_STATE = 1502,
    CMD_DOOR_SENSOR_GET_INFO = 1501,
    CMD_DOOR_SENSOR_INFO_REPORT = 1500,
    CMD_DOOR_SENSOR_LOW_POWER_REPORT = 1504,
    CMD_DOWNLOAD_CANCEL = 1051,
    CMD_DOWNLOAD_VIDEO = 1024,
    CMD_EAS_SWITCH = 1015,
    CMD_ENTRY_SENSOR_BAT_STATE = 1552,
    CMD_ENTRY_SENSOR_CHANGE_TIME = 1551,
    CMD_ENTRY_SENSOR_STATUS = 1550,
    CMD_FLOODLIGHT_BROADCAST = 902,
    CMD_FORMAT_SD = 1029,
    CMD_FORMAT_SD_PROGRESS = 1053,
    CMD_GATEWAYINFO = 1100,
    CMD_GEO_ADD_USER_INFO = 1259,
    CMD_GEO_DEL_USER_INFO = 1261,
    CMD_GEO_SET_USER_STATUS = 1258,
    CMD_GEO_UPDATE_LOC_SETTING = 1262,
    CMD_GEO_UPDATE_USER_INFO = 1260,
    CMD_GET_ADMIN_PWD = 1122,
    CMD_GET_ALARM_MODE = 1151,
    CMD_GET_ARMING_INFO = 1107,
    CMD_GET_ARMING_STATUS = 1108,
    CMD_GET_AUDDEC_INFO = 1109,
    CMD_GET_AUDDEC_SENSITIVITY = 1110,
    CMD_GET_AUDDE_CSTATUS = 1111,
    CMD_GET_AWAY_ACTION = 1239,
    CMD_GET_BATTERY = 1101,
    CMD_GET_BATTERY_TEMP = 1138,
    CMD_GET_CAMERA_LOCK = 1119,
    CMD_GET_CHARGE_STATUS = 1136,
    CMD_GET_CUSTOM1_ACTION = 1148,
    CMD_GET_CUSTOM2_ACTION = 1149,
    CMD_GET_CUSTOM3_ACTION = 1150,
    CMD_GET_DELAY_ALARM = 1164,
    CMD_GET_DEVICE_PING = 1152,
    CMD_GET_DEVS_NAME = 1129,
    CMD_GET_DEVS_RSSI_LIST = 1274,
    CMD_GET_DEV_STATUS = 1131,
    CMD_GET_DEV_TONE_INFO = 1127,
    CMD_GET_DEV_UPGRADE = 1134,
    CMD_GET_EAS_STATUS = 1118,
    CMD_GET_EXCEPTION_LOG = 1124,
    CMD_GET_FLOODLIGHT_WIFI_LIST = 1405,
    CMD_GET_GATEWAY_LOCK = 1120,
    CMD_GET_HOME_ACTION = 1225,
    CMD_GET_HUB_LAN_IP = 1176,
    CMD_GET_HUB_LOG = 1132,
    CMD_GET_HUB_LOGIG = 1140,
    CMD_GET_HUB_NAME = 1128,
    CMD_GET_HUB_POWWER_SUPPLY = 1137,
    CMD_GET_HUB_TONE_INFO = 1126,
    CMD_GET_HUB_UPGRADE = 1133,
    CMD_GET_IRCUTSENSITIVITY = 1114,
    CMD_GET_IRMODE = 1113,
    CMD_GET_MDETECT_PARAM = 1105,
    CMD_GET_MIRRORMODE = 1112,
    CMD_GET_NEWVESION = 1125,
    CMD_GET_OFF_ACTION = 1177,
    CMD_GET_P2P_CONN_STATUS = 1130,
    CMD_GET_PIRCTRL = 1116,
    CMD_GET_PIRINFO = 1115,
    CMD_GET_PIRSENSITIVITY = 1117,
    CMD_GET_RECORD_TIME = 1104,
    CMD_GET_REPEATER_CONN_TEST_RESULT = 1270,
    CMD_GET_REPEATER_RSSI = 1266,
    CMD_GET_REPEATER_SITE_LIST = 1263,
    CMD_GET_START_HOMEKIT = 1163,
    CMD_GET_SUB1G_RSSI = 1141,
    CMD_GET_TFCARD_FORMAT_STATUS = 1143,
    CMD_GET_TFCARD_REPAIR_STATUS = 1153,
    CMD_GET_TFCARD_STATUS = 1135,
    CMD_GET_UPDATE_STATUS = 1121,
    CMD_GET_UPGRADE_RESULT = 1043,
    CMD_GET_WAN_LINK_STATUS = 1268,
    CMD_GET_WAN_MODE = 1265,
    CMD_GET_WIFI_PWD = 1123,
    CMD_GET_WIFI_RSSI = 1142,
    CMD_HUB_ALARM_TONE = 1281,
    CMD_HUB_CLEAR_EMMC_VOLUME = 1800,
    CMD_HUB_NOTIFY_ALARM = 1282,
    CMD_HUB_NOTIFY_MODE = 1283,
    CMD_HUB_REBOOT = 1034,
    CMD_HUB_TO_FACTORY = 1036,
    CMD_IRCUT_SWITCH = 1013,
    CMD_KEYPAD_BATTERY_CAP_STATE = 1653,
    CMD_KEYPAD_BATTERY_CHARGER_STATE = 1655,
    CMD_KEYPAD_BATTERY_TEMP_STATE = 1654,
    CMD_KEYPAD_GET_PASSWORD = 1657,
    CMD_KEYPAD_GET_PASSWORD_LIST = 1662,
    CMD_KEYPAD_IS_PSW_SET = 1670,
    CMD_KEYPAD_PSW_OPEN = 1664,
    CMD_KEYPAD_SET_CUSTOM_MAP = 1660,
    CMD_KEYPAD_SET_PASSWORD = 1650,
    CMD_LEAVING_DELAY_AWAY = 1172,
    CMD_LEAVING_DELAY_CUSTOM1 = 1173,
    CMD_LEAVING_DELAY_CUSTOM2 = 1174,
    CMD_LEAVING_DELAY_CUSTOM3 = 1175,
    CMD_LEAVING_DELAY_HOME = 1171,
    CMD_LIVEVIEW_LED_SWITCH = 1056,
    CMD_MDETECTINFO = 1106,
    CMD_MOTION_SENSOR_BAT_STATE = 1601,
    CMD_MOTION_SENSOR_ENABLE_LED = 1607,
    CMD_MOTION_SENSOR_ENTER_USER_TEST_MODE = 1613,
    CMD_MOTION_SENSOR_EXIT_USER_TEST_MODE = 1610,
    CMD_MOTION_SENSOR_PIR_EVT = 1605,
    CMD_MOTION_SENSOR_SET_CHIRP_TONE = 1611,
    CMD_MOTION_SENSOR_SET_PIR_SENSITIVITY = 1609,
    CMD_MOTION_SENSOR_WORK_MODE = 1612,
    CMD_NAS_SWITCH = 1145,
    CMD_NAS_TEST = 1146,                    //could be used to manually start/stop the RTSP stream
    CMD_NOTIFY_PAYLOAD = 1351,
    CMD_P2P_DISCONNECT = 1044,
    CMD_PING = 1139,
    CMD_PIR_SWITCH = 1011,
    CMD_RECORDDATE_SEARCH = 1041,
    CMD_RECORDLIST_SEARCH = 1042,
    CMD_RECORD_AUDIO_SWITCH = 1366,
    CMD_RECORD_IMG = 1021,
    CMD_RECORD_IMG_STOP = 1022,
    CMD_RECORD_PLAY_CTRL = 1026,
    CMD_RECORD_VIEW = 1025,
    CMD_REPAIR_PROGRESS = 1058,
    CMD_REPAIR_SD = 1057,
    CMD_REPEATER_RSSI_TEST = 1269,
    CMD_SDINFO = 1102,
    CMD_SDINFO_EX = 1144,
    CMD_SENSOR_SET_CHIRP_TONE = 1507,
    CMD_SENSOR_SET_CHIRP_VOLUME = 1508,
    CMD_SET_AI_NICKNAME = 1242,
    CMD_SET_AI_PHOTO = 1231,
    CMD_SET_AI_SWITCH = 1236,
    CMD_SET_ALL_ACTION = 1255,
    CMD_SET_ARMING = 1224,
    CMD_SET_ARMING_SCHEDULE = 1211,
    CMD_SET_AS_SERVER = 1237,
    CMD_SET_AUDDEC_INFO = 1212,
    CMD_SET_AUDDEC_SENSITIVITY = 1213,
    CMD_SET_AUDIOSENSITIVITY = 1227,
    CMD_SET_AUTO_DELETE_RECORD = 1367,
    CMD_SET_BITRATE = 1206,
    CMD_SET_CUSTOM_MODE = 1256,
    CMD_SET_DEVS_NAME = 1217,
    CMD_SET_DEVS_OSD = 1214,
    CMD_SET_DEVS_TONE_FILE = 1202,
    CMD_SET_DEV_MD_RECORD = 1273,
    CMD_SET_DEV_MIC_MUTE = 1240,
    CMD_SET_DEV_MIC_VOLUME = 1229,
    CMD_SET_DEV_SPEAKER_MUTE = 1241,
    CMD_SET_DEV_SPEAKER_VOLUME = 1230,
    CMD_SET_DEV_STORAGE_TYPE = 1228,
    CMD_SET_FLOODLIGHT_BRIGHT_VALUE = 1401,
    CMD_SET_FLOODLIGHT_DETECTION_AREA = 1407,
    CMD_SET_FLOODLIGHT_LIGHT_SCHEDULE = 1404,
    CMD_SET_FLOODLIGHT_MANUAL_SWITCH = 1400,
    CMD_SET_FLOODLIGHT_STREET_LAMP = 1402,
    CMD_SET_FLOODLIGHT_TOTAL_SWITCH = 1403,
    CMD_SET_FLOODLIGHT_WIFI_CONNECT = 1406,
    CMD_SET_GSSENSITIVITY = 1226,
    CMD_SET_HUB_ALARM_AUTO_END = 1280,
    CMD_SET_HUB_ALARM_CLOSE = 1279,
    CMD_SET_HUB_AUDEC_STATUS = 1222,
    CMD_SET_HUB_GS_STATUS = 1220,
    CMD_SET_HUB_IRCUT_STATUS = 1219,
    CMD_SET_HUB_MVDEC_STATUS = 1221,
    CMD_SET_HUB_NAME = 1216,
    CMD_SET_HUB_OSD = 1253,
    CMD_SET_HUB_PIR_STATUS = 1218,
    CMD_SET_HUB_SPK_VOLUME = 1235,
    CMD_SET_IRMODE = 1208,
    CMD_SET_JSON_SCHEDULE = 1254,
    CMD_SET_LANGUAGE = 1200,
    CMD_SET_LIGHT_CTRL_BRIGHT_PIR = 1412,
    CMD_SET_LIGHT_CTRL_BRIGHT_SCH = 1413,
    CMD_SET_LIGHT_CTRL_LAMP_VALUE = 1410,
    CMD_SET_LIGHT_CTRL_PIR_SWITCH = 1408,
    CMD_SET_LIGHT_CTRL_PIR_TIME = 1409,
    CMD_SET_LIGHT_CTRL_SUNRISE_INFO = 1415,
    CMD_SET_LIGHT_CTRL_SUNRISE_SWITCH = 1414,
    CMD_SET_LIGHT_CTRL_TRIGGER = 1411,
    CMD_SET_MDETECTPARAM = 1204,
    CMD_SET_MDSENSITIVITY = 1272,
    CMD_SET_MIRRORMODE = 1207,
    CMD_SET_MOTION_SENSITIVITY = 1276,
    CMD_SET_NIGHT_VISION_TYPE = 1277,
    CMD_SET_NOTFACE_PUSHMSG = 1248,
    CMD_SET_PAYLOAD = 1350,
    CMD_SET_PIRSENSITIVITY = 1210,
    CMD_SET_PIR_INFO = 1209,
    CMD_SET_PIR_POWERMODE = 1246,
    CMD_SET_PIR_TEST_MODE = 1243,
    CMD_SET_PRI_ACTION = 1233,
    CMD_SET_RECORDTIME = 1203,
    CMD_SET_REPEATER_PARAMS = 1264,
    CMD_SET_RESOLUTION = 1205,
    CMD_SET_SCHEDULE_DEFAULT = 1257,
    CMD_SET_SNOOZE_MODE = 1271,
    CMD_SET_STORGE_TYPE = 1223,
    CMD_SET_TELNET = 1247,
    CMD_SET_TIMEZONE = 1215,
    CMD_SET_TONE_FILE = 1201,
    CMD_SET_UPGRADE = 1238,
    CMD_SNAPSHOT = 1028,
    CMD_START_REALTIME_MEDIA = 1003,
    CMD_START_RECORD = 1009,
    CMD_START_REC_BROADCASE = 900,
    CMD_START_TALKBACK = 1005,
    CMD_START_VOICECALL = 1007,
    CMD_STOP_REALTIME_MEDIA = 1004,
    CMD_STOP_RECORD = 1010,
    CMD_STOP_REC_BROADCASE = 901,
    CMD_STOP_SHARE = 1023,
    CMD_STOP_TALKBACK = 1006,
    CMD_STOP_VOICECALL = 1008,
    CMD_STREAM_MSG = 1302,
    CMD_STRESS_TEST_OPER = 1050,
    CMD_TIME_SYCN = 1033,
    CMD_UNBIND_ACCOUNT = 1002,
    CMD_VIDEO_FRAME = 1300,
    CMD_WIFI_CONFIG = 1032,
    CMD_SWITCH_TIME = 1162,
    CMD_BATTERY_FALSE_EVENT_COUNT = 6056,
    CMD_INDOOR_AI_CRYING_ENABLE = 6024,
    CMD_INDOOR_AI_MOTION_ENABLE = 6023,
    CMD_INDOOR_AI_PERSON_ENABLE = 6022,
    CMD_INDOOR_AI_PET_ENABLE = 6026,
    CMD_INDOOR_AI_SOUND_ENABLE = 6025,
    CMD_INDOOR_CONTINUE_RECORD_SCHEDULE = 6013,
    CMD_INDOOR_DET_SET_ACTIVE_ZONE = 6042,
    CMD_INDOOR_DET_SET_MOTION_DETECT_ENABLE = 6040,
    CMD_INDOOR_DET_SET_MOTION_DETECT_TYPE = 6045,
    CMD_INDOOR_DET_SET_MOTION_SENSITIVITY_IDX = 6041,
    CMD_INDOOR_DET_SET_PET_ENABLE = 6047,
    CMD_INDOOR_DET_SET_PET_EXPEL_RESPONSOR = 6048,
    CMD_INDOOR_DET_SET_PET_EXPEL_RESP_IDX = 6049,
    CMD_INDOOR_DET_SET_SOUND_DETECT_ENABLE = 6043,
    CMD_INDOOR_DET_SET_SOUND_DETECT_TYPE = 6046,
    CMD_INDOOR_DET_SET_SOUND_SENSITIVITY_IDX = 6044,
    CMD_INDOOR_EVENT_COUNT = 6053,
    CMD_INDOOR_HK_ACTIVE_HOMEKIT = 6061,
    CMD_INDOOR_HK_GET_HK_BIND_STATUS = 6062,
    CMD_INDOOR_LED_SWITCH = 6014,
    CMD_INDOOR_NAS_STORAGE_TYPE = 6050,
    CMD_INDOOR_OWNER_STREAM_TYPE = 6052,
    CMD_INDOOR_PAN_CALIBRATION = 6017,
    CMD_INDOOR_PAN_MOTION_TRACK = 6016,
    CMD_INDOOR_PAN_SPEED = 6015,
    CMD_INDOOR_PUSH_JUMP_TYPE = 6021,
    CMD_INDOOR_PUSH_NOTIFY_TYPE = 6020,
    CMD_INDOOR_SET_CONTINUE_ENABLE = 6010,
    CMD_INDOOR_SET_CONTINUE_TYPE = 6011,
    CMD_INDOOR_SET_RECORD_AUDIO_ENABLE = 6012,
    CMD_INDOOR_SHOW_SDCARD = 6054,
    CMD_INDOOR_TFCARD_NAS_STATUS = 6051,
    CMD_IN_TEST_MODE = 6072,
    CMD_PLAY_BACK_EVENT_STOP = 1055,
    CMD_SET_DETECT_TYPE = 6071,
    CMD_SET_PIR_SENSITIVITY = 6070,
    CMD_SMARTLOCK_QUERY_BATTERY_LEVEL = 6001,
    CMD_SMARTLOCK_QUERY_STATUS = 6000,
    CMD_SUB1G_REP_BIND_FAILED = 2109,
    CMD_SUB1G_REP_CHARGE_STATE = 2108,
    CMD_SUB1G_REP_POWER_OFF = 2110,
    CMD_SUB1G_REP_RUNTIME_STATE = 2107,
    CMD_SUB1G_REP_UNPLUG_POWER_LINE = 2111
}

export enum MessageType {
    //com.oceanwing.battery.cam.zmedia.model.FunctionType
    INIT_P2P_CLIENT_TYPE = 1,
    CONNECT_P2P_TYPE = 2,
    DEINIT_P2P_CLIENT_TYPE = 3,
    SET_COMMAND_WITH_INT_TYPE = 4,
    GET_COMMAND_WITH_INT_TYPE = 5,
    SET_COMMAND_WITH_STRING_TYPE = 6,
    GET_COMMAND_WITH_STRING_TYPE = 7,
    SET_REC_BROADCAT_STATE_TYPE = 8,
    SET_COMMAND_WITH_M_STRING = 9,
    SET_COMMAND_WITH_INT_STRING_TYPE = 10,
    SET_SCHEDULE_TYPE = 11,
    BATCH_DEL_EVENT_TYPE = 12,
    ADD_AI_FACE_INFO_TYPE = 13,
    SET_COMMAND_WITH_2INT_MSTRING = 14,
    CHECK_HUB_STATE = 15,
    SET_COMMAND_WITH_2STR_INT = 16,
    BIND_HUB_TYPE = 17,
    P2P_BIND_HUB_TYPE = 18
}

export enum ErrorCode {
    //com.oceanwing.battery.cam.zmedia.model.MediaErrorCode
    ERROR_BIND_CLIENT_SOCKET_CREATE_FAIL = -304,
    ERROR_BIND_CLIENT_SOCKET_RECEIVE_LEN_ERROR = -307,
    ERROR_BIND_CLIENT_SOCKET_RECEIVE_TIMEOUT = -306,
    ERROR_BIND_CLIENT_SOCKET_SEND_FAIL = -305,
    ERROR_BIND_COMMAND_ERROR = -309,
    ERROR_BIND_PARAM_NULL = -308,
    ERROR_BROADCAST_RECEIVE_SN_NULL = -303,
    ERROR_BROADCAST_RECEIVE_TIME_OUT = -302,
    ERROR_BROADCAST_START_ALREADY_RUNNING = -300,
    ERROR_BROADCAST_STOP_SOCKET_FD_ERROR = -301,
    ERROR_CLOSE_HOMEKIT = -143,
    ERROR_COMMAND_TIMEOUT = -133,
    ERROR_CONNECT_TIMEOUT = -134,
    ERROR_DEV_BUSY = -114,
    ERROR_DEV_CLOSE = -128,
    ERROR_DEV_OFFLINE = -109,
    ERROR_DEV_UPDATEING = -113,
    ERROR_GET_EXEC_RESULT = -120,
    ERROR_HAVE_CONNECT = -101,
    ERROR_HIGHT_TEMPERATURE = -121,
    ERROR_HUB_NON_ADMIN = -125,
    ERROR_HUB_UPDATEING = -112,
    ERROR_INVALID_ACCOUNT = -104,
    ERROR_INVALID_COMMAND = -103,
    ERROR_INVALID_PARAM = -110,
    ERROR_INVALID_PARAM_LEN = -107,
    ERROR_MAX_DEV_CONNECT_NUM = -123,
    ERROR_MAX_HUB_CONNECT_NUM = -102,
    ERROR_MAX_NAS_CONNECT_NUM = -130,
    ERROR_MODE_DISABLE = -129,
    ERROR_NETWORK_NOT_AVAILABLE = 998,
    ERROR_NOT_FACE = -115,
    ERROR_NOT_FIND_DEV = -106,
    ERROR_NOT_TFCARD = -118,
    ERROR_NULL_POINT = -100,
    ERROR_OPEN_FILE_FAIL = -111,
    ERROR_PARAM_NO_CHANGE = -116,
    ERROR_PIPE_FAIL = -124,
    ERROR_PLAY_STOP = -127,
    ERROR_POWER_LOW = -117,
    ERROR_PPCS_ALREADY_INITIALIZED = -2,
    ERROR_PPCS_CONNECTING = -126,
    ERROR_PPCS_DEVICE_NOT_ONLINE = -6,
    ERROR_PPCS_FAIL_TO_CREATE_THREAD = -22,
    ERROR_PPCS_FAIL_TO_RESOLVE_NAME = -7,
    ERROR_PPCS_ID_OUT_OF_DATE = -9,
    ERROR_PPCS_INVALID_APILICENSE = -21,
    ERROR_PPCS_INVALID_DSK = -23,
    ERROR_PPCS_INVALID_ID = -4,
    ERROR_PPCS_INVALID_PARAMETER = -5,
    ERROR_PPCS_INVALID_PREFIX = -8,
    ERROR_PPCS_INVALID_SESSION_HANDLE = -11,
    ERROR_PPCS_MAX_SESSION = -17,
    ERROR_PPCS_NOT_INITIALIZED = -1,
    ERROR_PPCS_NO_RELAY_SERVER_AVAILABLE = -10,
    ERROR_PPCS_RELAY = 1,
    ERROR_PPCS_REMOTE_SITE_BUFFER_FULL = -15,
    ERROR_PPCS_SESSION_CLOSED_CALLED = -14,
    ERROR_PPCS_SESSION_CLOSED_INSUFFICIENT_MEMORY = -20,
    ERROR_PPCS_SESSION_CLOSED_REMOTE = -12,
    ERROR_PPCS_SESSION_CLOSED_TIMEOUT = -13,
    ERROR_PPCS_SUCCESSFUL = 0,
    ERROR_PPCS_TIME_OUT = -3,
    ERROR_PPCS_UDP_PORT_BIND_FAILED = -18,
    ERROR_PPCS_USER_CONNECT_BREAK = -19,
    ERROR_PPCS_USER_LISTEN_BREAK = -16,
    ERROR_SET_P2P_INFO = -122,
    ERROR_STATION_HAS_BIND = 20020,
    ERROR_TFCARD_FORMATING = -119,
    ERROR_TFCARD_REPAIRING = -135,
    ERROR_TFCARD_VOLUME_OVERFLOW = -132,
    ERROR_WAIT_TIMEOUT = -108,
    ERROR_WAKEUP_CAMRA_TYPE = -131,
    ERROR_WRITE_FLASH = -105,
    ERROR_XM_BASE = -200,
    ERROR_XM_WIFI_DISCONNECT = -203,
    ERROR_XM_WIFI_TIMEOUT = -205,
    ERROR_XM_WIFI_WAKEUP_FAIL = -204,
}

export enum ControlResponse {
    //com.oceanwing.battery.cam.zmedia.model.ZControlResponse
    ALARM_HUB_STOP = 0,
    ALARM_DEV_STOP = 1,
    ALARM_GSENSOR = 2,
    ALARM_PIR = 3,
    ALARM_APP = 4,
    ALARM_HOT = 5,
    ALARM_DOOR = 6,
    ALARM_CAMERA_PIR = 7,
    ALARM_MOTION_SENSOR = 8,
    ALARM_CAMERA_GSENSOR = 9,
    ALARM_CAMERA_APP = 10,
    ALARM_CAMERA_LINKAGE = 11,
    ALARM_HUB_KEYPAD = 13,
    ALARM_HUB_STOP_BY_KEYPAD = 15,
    ALARM_HUB_STOP_BY_APP = 16,
    ALARM_HUB_STOP_BY_HAND = 17
}