microIoT.Obloq_mqtt_callback_user(function (message) {
    basic.showString(message)
})
microIoT.Obloq_mqtt_setup(
    "yourSSID",
    "yourPASSWORD",
    "yourIotId",
    "yourIotPwd",
    "yourIotTopic",
    microIoT.SERVERS.China
)
basic.forever(() => {
    microIoT.Obloq_mqtt_send_message("hello")
    basic.pause(5000)
})
