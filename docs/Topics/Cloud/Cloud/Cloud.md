import { DocsTabs } from "../../../../src/components/Tabs/DocsTabs";
import Questions from "./\_questions.mdx";
import Resources from "./\_resources.mdx";

# Cloud Infrastructure

_pay monthly fee, get access to a data center's servers_

<div class="beginner">

</div>

<div class="intermediate">

</div>

<div class="expert">

</div>

<DocsTabs Questions={<Questions />} Resources={<Resources />} />

You wouldn't call someone 'car-less' if they didn't own a car and instead regularly used uber, Serverless is exactly the same. You don't own a server but you can pay someone who does own one to execute your code when you need it.

### Multi-Tier Architecture

- **Presentation **- The visual layout of the data (GUI)

- **Application **- The processing/business logic, how we're mainpulating the data

- **Data **- getting and storing the data

Multi-tier is a very common approach traditionally used in the past moreso **servers would've been needed for each layer**

### **Backend as a Service (BaaS)**

A cloud service model. Server-side **logic **and **state **are hosted by a cloud provider, a series of APIs in the cloud

### **Function as a Service (FaaS)**

- **Event Triggered Code **- Run on containers

- **Dynamic **- If traffic spike, more instances of your app will be spun up

- **Ephemeral **- lasting only a short time. Once their work is complete the containers are gone

## Serverless Architecture

A runtime architecture where you've written small pieces of code that is executed through a cloud provider.

- APPLICATION

- FaaS

- BaaS

- Cloud Provider

- Physical Infrastructure
