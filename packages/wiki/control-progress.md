# Control System

## Low Level Control

### Field Oriented Control

<p style="text-align: justify;">For BLDC motor, there exists a lot of different way to drive it. The one that maximizes the efficiency with open implementation however is Field Oriented Control (FOC). We plan to use <a href="https://simplefoc.com/" target="_blank">SimpleFOC</a> library to control the motor. The feedback used for the FOC is a hall sensor, but current sense is also used to estimate the stator winding temperature.</p>

### CAN-FD

<p style="text-align: justify;">The sheer number of actuator to be controlled requires the need of communication bus. Since the chosen MCU have CANBUS controller with CAN-FD support, it is what being used. The supporting component required is low or the same with other bus communication protocol considered (MODBUS) and the pros outweighted the cons. Namely, the CANBUS have low current draw on idle state compared to other bus, have higher speed, and built-in arbitration.</p>

## High Level Control

<p style="text-align: justify;">To control and pilot the body, Neuro-sama language model doesn't necessarily have the capabilities to directly give command to each individual actuator/muscle. In order for the language model to be able to pilot the robot, an integration is needed that will give the language model the necessary control over the robot. This high level control will communicate with the language model to achieve the desired robot movement. With that in mind, the high-level model also have certain requirement to be met. Some of the requirement is as follows:</p>

- Robust since failure in the high level control will cascade down to the low-level controller
- Low-latency to keep up with the real-world interaction
- Feedback for the language model so the language model will have rich context about the robot state

To achieve that goal, the proposed control scheme is best explained in a diagram below:

```mermaid
flowchart TD;
  G1[Robobrain Computer 1]
  G2[Robobrain Computer 2]
  R1[Robotar Computer 1]
  R2[Robotar Computer 2]

  subgraph Ground Control
    Neuro <-->|Websocket| G1 & G2
  end

  subgraph Robot
    subgraph Onboard Computer
      G1 & G2 net@<-->|"Robot Network (Wi-Fi)"| R1 & R2;
    end

    R1 & R2 <-->|USB| C[Low Level Controller];
  end

  click G1 "https://github.com/SimLeek/robobrain" _blank
  click G2 "https://github.com/SimLeek/robobrain" _blank
  click R1 "https://github.com/SimLeek/robotar" _blank
  click R2 "https://github.com/SimLeek/robotar" _blank
```

And this is how the redundant system will be orchestrated:

```mermaid
flowchart TD
  G1[Computer 1]
  G2[Computer 2]
  R1[Computer 1]
  R2[Computer 2]

  subgraph Robobrain
    direction LR
    G1 <-->|"Seno (Ethernet)"| G2
  end

  subgraph Robotar
    direction LR
    R1 <-->|"Seno (Ethernet)"| R2
  end

  click G1 "https://github.com/SimLeek/robobrain" _blank
  click G2 "https://github.com/SimLeek/robobrain" _blank
  click R1 "https://github.com/SimLeek/robotar" _blank
  click R2 "https://github.com/SimLeek/robotar" _blank
```

- [Robot Network (Transport using ad-hoc wi-fi network)](https://github.com/SimLeek/robot_network)
- [Seno (The redundancy orchestrator)](https://github.com/SimLeek/seno)


<p style="text-align: justify;">Neuro-sama already have the capabilities to take image input as vedal mentioned. However, the high-level controller will need the camera feed to be further processed before it can be used. This is also true for other sensor data such as microphone, limb position, and touch sensor. The high-level controller will likely be a system comprised of interdependent neural-network model due to the complexity of the robot.</p>
