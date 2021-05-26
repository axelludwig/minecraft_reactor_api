local monitor = peripheral.find("monitor")
monitor.setTextScale(1)
local state

while true do
    monitor.clear()
    local temp = http.get("http://linkenparis.com:7777/state")
    state = temp.readAll()

    if (state == "true") then
        redstone.setOutput("back", true)
        monitor.setCursorPos(3, 3)
        monitor.setTextColor(colors.green)
        monitor.write("on")
    else
        redstone.setOutput("back", false)
        monitor.setCursorPos(3, 3)
        monitor.setTextColor(colors.red)
        monitor.write("off")
    end
    os.sleep(0.1)
end
