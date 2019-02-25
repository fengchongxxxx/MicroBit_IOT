let message = ""
microIoT.Obloq_mqtt_callback_user(function (message) {
    basic.showString(message)
})
microIoT.Obloq_mqtt_callback_user_more(TOPIC.topic_1, function (message) {
    basic.showString(message)
})
microIoT.Obloq_mqtt_callback_user_more(TOPIC.topic_2, function (message) {
    basic.showString(message)
})
microIoT.Obloq_mqtt_callback_user_more(TOPIC.topic_3, function (message) {
    basic.showString(message)
})
microIoT.Obloq_mqtt_callback_user_more(TOPIC.topic_4, function (message) {
    basic.showString(message)
})
microIoT.Obloq_mqtt_setup(
"dfrobotYanfa",
"hidfrobot",
"HJZTNhw3fm",
"HyGp4hD2zm",
"rJq_biTXQ",
    microIoT.SERVERS.China
)
microIoT.Obloq_mqtt_add_topic(TOPIC.topic_1, "Bkt_-i6mm")
microIoT.Obloq_mqtt_add_topic(TOPIC.topic_2, "ByG_bopQX")
microIoT.Obloq_mqtt_add_topic(TOPIC.topic_3, "HJlO-iaQQ")
microIoT.Obloq_mqtt_add_topic(TOPIC.topic_4, "SkTDbjp7Q")
basic.forever(() => {
    microIoT.Obloq_mqtt_send_message("0")
    basic.pause(1000)
    microIoT.Obloq_mqtt_send_message_more("1", TOPIC.topic_1)
    basic.pause(1000)
    microIoT.Obloq_mqtt_send_message_more("2", TOPIC.topic_2)
    basic.pause(1000)
    microIoT.Obloq_mqtt_send_message_more("3", TOPIC.topic_3)
    basic.pause(1000)
    microIoT.Obloq_mqtt_send_message_more("4", TOPIC.topic_4)
    basic.pause(1000)
})
