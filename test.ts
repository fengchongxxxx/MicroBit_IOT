Obloq.Obloq_mqtt_callback_user(function (message) {
    basic.showString(message)
})
Obloq.Obloq_mqtt_setup(
    "yourSSID",
    "yourPASSWORD",
    "yourIotId",
    "yourIotPwd",
    "yourIotTopic",
    Obloq.SERVERS.China
)
basic.forever(() => {
    Obloq.Obloq_mqtt_send_message("hello")
    basic.pause(5000)
})
