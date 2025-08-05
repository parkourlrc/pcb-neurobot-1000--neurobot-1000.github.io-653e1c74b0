# Electrical Design

## BLDC Controller

The BLDC controller is based on the STSPIN32G, a dedicated motor control MCU with built-in step down controller, CANBUS controller with CAN-FD support and more feature that is required for motor control. The board is divided into 2 separate board to maintain the small size of 30mm x 30mm. Those 2 board comprise of the power stage PCB with high-power MOSFET, and the control board itself that contains the MCU and communication connector.

## Power Distribution

The power source is an [off-the-shelf lithium battery](https://egopowerplus.co.uk/products/batteries-chargers/BA6720T). The plan is to let vedal be able to purchase it from his end and ease the shipping restrictions that is usually applied to lithium battery. The plan is to minimize the need for vedal to tweak with the internal as much as possible.

## Sensory Input

Some of the sensory input for the robot includes 

- 2 camera for binocular vision
- 2 Microphone for stereo hearing
- Some form of touch sensor behind the skin (still in selection process)
- Limb and muscle position feedback from the actuator controller