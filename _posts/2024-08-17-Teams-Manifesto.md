---
title: Manifesto of our Team 📐
description: Standards and Practices of our team to deliver
date: 2024-08-17 00:00:00
author: Sajjad
categories: [leadership]
tags: [manifesto, leader, practices] 
image:
  path: /assets/img/manifesto/card.jpg
  alt: Manifesto is the at heart of our team
---


When I became the leader of an automation team at the largest classified ad platform in the Middle East, I embraced the challenge of automating content moderation while maintaining the highest quality standards. To facilitate the onboarding of new team members and ensure our alignment with our mission and standards, I crafted a manifesto for our team.
This is my first leadership role, and I am dedicated to mastering the art of leading effective teams and organizations. I hope these practices will not only help us establish robust problem-solving methodologies but also inspire other teams and leaders striving for growth. I tried keep the manifesto concise and decisive to make it easily digestible for those outside the immediate context of our team.


# Manifesto of Content Moderation Automation Team 🏭
This document is written to set the technical, product, and team alignment standards to help us achieve our mission and objectives. It serves as a guide for more optimal problem-solving, rather than as a strict team law. Other standards are precisely defined based on Company's overarching documents and the career ladder docs for each position.

## Vision & Mission 🔭
Automate ad review accurately and swiftly for all Divar users, making it scalable, configurable, and sustainable.
We leverage cutting-edge AI and data-driven technologies to make ad reviews accurate and cost-effective, with the flexibility to easily modify rules, update automatically with new ads, and require minimal human intervention for quality control and validation. Product owners should be able to adjust rules as needed. We use LLMs, agents, and any other required technology to achieve this.

## Team Values 🙌

### Result-Oriented 📊
> Improving Metrics > Fancy Work
{: .prompt-tip }

Real work for us means code or models deployed in production or analyses that support product decisions. If a task doesn't impact metrics, we don't waste time on it. We prefer iterative processes and failing fast so we can test ideas quickly and build feedback loops. We take extreme ownership and do not distribute accountability. We document decisions and reasons and avoid navigating blindly. We make decisions based on data and metrics, define our measures of success and failure upfront, and evaluate them throughout the process. We are not afraid of calculated risks and continually seek improvement across all processes. We prioritize and execute systematically. In essence, we aim to solve problems using scientifically documented, fail-fast experiments.
e.g. At the start of each iteration, we specify our expectations and work backwards to build them.

### Transparency 🪞
> Constructive Conflict > Low Standards
{: .prompt-tip }

Transparency exists at all levels and in every team decision. We can question or disagree with decisions. Asking questions, critical thinking, challenging the status quo, disagreeing and committing, providing early feedback, curiosity, documenting, visualizing systems & decisions, knowledge sharing, and seeking help are encouraged. We expect everyone to raise concerns over low standards and provide feedback and solutions for improvement. We do not hold useless meetings. We document tasks and decisions, making them traceable. Our tasks have clear requirements and checklists. We remind ourselves of learnings and good/bad points at each iteration and take steps for improvement.
e.g. In each iteration, we remind ourselves of strengths and weaknesses, and take steps for their improvement.

### Personal and Technical Growth 🌱
> Problem Solver > Specialist in X
{: .prompt-tip }

We deliver outputs of the highest quality we can and prefer smart, focused work over grinding. We continually invest time in growing and improving our technical and problem-solving abilities through study. We strive to be generalists capable of problem-solving rather than merely tool learners. We can list our current weaknesses and have specific plans for their improvement. We use our learnings to solve problems in our work. We maintain a curious outlook, always looking for new and better solutions. We have a progress doc for ourself and work with the help of the team on that. We conduct knowlege sharings and reading groups to study best practices and new ways of solving our current problems.


## Team Standards ✊


### Development: Fail Fast Documented Experiments
* How does this task contribute to the mission and why are we doing it?
* Why is it prioritized over other tasks? Which metrics does it affect?
* What should and shouldn't the tools we develop do?
* Is there any well studied solution, have we studied similar problem?
* Do we know the failure detection metric? Do we have a Plan B?
* We put ourselves in the shoes users or reviewers and work backward.
* We write design docs or product docs and get feedback from the team.
* We ensure correct functionality first, then optimize Low-hanging fruits.
* Establish a feedback loop before optimizing, identifying bottlenecks
* Commit and push early, maintaining short-lived branches and testing in the production asap.
* Measure code cleanliness in code reviews and write quality tests.
* Act quickly in decision-making and experiment with ideas swiftly.
* All codes, configs, notebooks, and experimentsare on Git, reproducible.
* We know the next steps and have added technical debts to the backlog.

### Deployment: CI/CD
Production-deployed code must be reviewed, tested in various ways including security, coordinated with operations, merged on master, its technical and product metrics monitored, deployment announced, and if necessary, a press release and FAQ made.
* Ensure sufficient monitoring, logging, and system traceability.
* In AI, verify offline and online metrics and have a feedback process.
* Update necessary docs like Readme and ensure all systems are updated.
* Perform post-deployment analyses like revenue impact if needed.-
* Write postmortems for issues and take ownership of post-event actions.
* Know how to hack our services and have plans for their improvement (Red Team).


## Final Thoughts 🏁
I draw significant inspiration from my own leader, who has taught me a great deal. Additionally, books such as "Accelerate" and "Leadership Strategy and Tactics" have been invaluable. Other books like "The Manager's Path," "The Five Dysfunctions of a Team," and "Working Backwards" have provided me with a deeper understanding of how to run a high-performing team. I'm at the start and a appreciate your recomendation and feedback a lot.
