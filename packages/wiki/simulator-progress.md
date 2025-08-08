# Simulation

The simulation is a heavy work in progress because there is not enough manpower to handle the simulation. The goals of the simulation is to simulate the performance of the design and to iterate on control strategy before the actual manufacturing started.

Some of the simulator that has been considered includes:
- [Isaac Sim by nVidia](https://github.com/isaac-sim/IsaacSim) along with the [GR00T foundation model](https://github.com/NVIDIA/Isaac-GR00T)
- Any simulator from [this list](https://en.wikipedia.org/wiki/Robotics_simulator) that support [SDFormat](http://sdformat.org/) (Most notably, we need the ball joint simulation)

There are also other simulation that is needed to calculate manufacturing parameter such as the BLDC simulation for example.
