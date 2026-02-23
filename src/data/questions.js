/**
 * Narrative questions with trait-based scoring.
 * Each option has a score object: logic, empathy, creativity, courage, strategy.
 * Omitted traits are treated as 0 when aggregating.
 */
export const SCORE_TRAITS = ['logic', 'empathy', 'creativity', 'courage', 'strategy']

export const QUESTIONS = [
  {
    id: 1,
    text: 'You see a stranger in trouble on the street. They look lost and upset. What do you do?',
    options: [
      { text: 'Help immediately', score: { empathy: 2, courage: 1 } },
      { text: 'Observe first and plan a approach', score: { logic: 2, strategy: 1 } },
      { text: 'Ask others nearby to help together', score: { empathy: 1, strategy: 2 } },
      { text: 'Walk past and mind your own business', score: { logic: 1 } },
    ],
  },
  {
    id: 2,
    text: 'Your team is stuck on a problem. The usual approach has failed. How do you respond?',
    options: [
      { text: 'Suggest a completely different method', score: { creativity: 2, courage: 1 } },
      { text: 'Break the problem into smaller steps', score: { logic: 2, strategy: 1 } },
      { text: 'Check in on how everyone feels first', score: { empathy: 2, creativity: 1 } },
      { text: 'Take the lead and try one more push', score: { courage: 2, strategy: 1 } },
    ],
  },
  {
    id: 3,
    text: 'You discover a shortcut that could save time but breaks an unwritten rule. What do you do?',
    options: [
      { text: 'Take the shortcut and stay quiet', score: { strategy: 2, courage: 1 } },
      { text: 'Follow the rule and explain why to others', score: { logic: 2, empathy: 1 } },
      { text: 'Propose changing the rule with a new idea', score: { creativity: 2, courage: 1 } },
      { text: 'Ask someone in charge what they prefer', score: { empathy: 2, strategy: 1 } },
    ],
  },
  {
    id: 4,
    text: 'A friend shares a wild idea they want to pursue. You think it might fail. How do you react?',
    options: [
      { text: 'Support them and help brainstorm', score: { empathy: 2, creativity: 1 } },
      { text: 'List the risks and suggest alternatives', score: { logic: 2, strategy: 1 } },
      { text: 'Encourage them to try anyway', score: { courage: 2, empathy: 1 } },
      { text: 'Propose a small test before going all in', score: { strategy: 2, logic: 1 } },
    ],
  },
  {
    id: 5,
    text: 'You are in a debate. The other side makes a point you had not considered. What do you do?',
    options: [
      { text: 'Acknowledge it and adjust your view', score: { empathy: 2, logic: 1 } },
      { text: 'Stick to your position and argue harder', score: { courage: 2, strategy: 1 } },
      { text: 'Ask questions to understand their logic', score: { logic: 2, empathy: 1 } },
      { text: 'Propose a compromise that blends both', score: { creativity: 2, strategy: 1 } },
    ],
  },
  {
    id: 6,
    text: 'A project deadline is moved up. The plan no longer fits. How do you proceed?',
    options: [
      { text: 'Rework the plan from scratch', score: { creativity: 2, courage: 1 } },
      { text: 'Cut scope and focus on must-haves', score: { logic: 2, strategy: 2 } },
      { text: 'Rally the team and share the pressure', score: { empathy: 2, courage: 1 } },
      { text: 'Negotiate for more time or resources', score: { strategy: 2, courage: 1 } },
    ],
  },
  {
    id: 7,
    text: 'You have to give bad news to someone who has worked hard. How do you handle it?',
    options: [
      { text: 'Be direct and clear, then offer support', score: { logic: 1, empathy: 2, courage: 1 } },
      { text: 'Soften the message and focus on positives', score: { empathy: 2, creativity: 1 } },
      { text: 'Prepare options they can choose from', score: { strategy: 2, empathy: 1 } },
      { text: 'Deliver the facts and step back', score: { logic: 2, courage: 1 } },
    ],
  },
]
