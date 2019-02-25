//get post
microIoT.Obloq_http_setup(
    "dfrobotYanfa",
    "hidfrobot",
    "192.168.0.106",
    8080
)
basic.forever(() => {
    basic.showString(microIoT.Obloq_http_get("input?id=1&val=" + input.lightLevel(), 10000))
    basic.pause(50)
    basic.showString(microIoT.Obloq_http_post("input?name=admin", "{\"id\":\"1\",\"val\":\"" + input.temperature() + "\"}", 10000))
    basic.pause(50)
})

//IFTTT
microIoT.Obloq_http_setup(
    "dfrobotYanfa",
    "hidfrobot",
    "maker.ifttt.com",
    80
)
basic.showString(microIoT.Obloq_wifi_ipconfig())
basic.forever(() => {
    basic.showString(microIoT.Obloq_http_get("trigger/testobloq/with/key/h_srC8EuWGX5izhfi7pi5", 10000))
    basic.pause(100)
})

