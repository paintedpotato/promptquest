// Lucide React Icons (simplified inline versions)
const Sparkles = ({ className }) => React.createElement('svg', {
  className,
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: 1, d: 'M12 3v3M18 12h3M12 18v3M6 12H3M15.8 8.2l2.1-2.1M8.2 8.2L6.1 6.1M15.8 15.8l2.1 2.1M8.2 15.8l-2.1 2.1' })
]);

const ArrowRight = ({ className }) => React.createElement('svg', {
  className,
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: 1, d: 'M5 12h14M12 5l7 7-7 7' })
]);

const RotateCcw = ({ className }) => React.createElement('svg', {
  className,
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: 1, d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' }),
  React.createElement('path', { key: 2, d: 'M3 3v5h5' })
]);

const CheckCircle = ({ className }) => React.createElement('svg', {
  className,
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 10 }),
  React.createElement('path', { key: 2, d: 'M9 12l2 2 4-4' })
]);

const XCircle = ({ className }) => React.createElement('svg', {
  className,
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 10 }),
  React.createElement('path', { key: 2, d: 'M15 9l-6 6M9 9l6 6' })
]);

const PromptQuest = () => {
  const [currentLevel, setCurrentLevel] = React.useState(0);
  const [userPrompt, setUserPrompt] = React.useState('');
  const [feedback, setFeedback] = React.useState('');
  const [attempts, setAttempts] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showHint, setShowHint] = React.useState(false);

  const levels = [
    {
      id: 0,
      title: "The Awakening",
      story: "You've discovered ARIA, an AI trapped in a digital realm. She needs your help to complete tasks, but she can only understand clear instructions. Your journey as a Prompt Engineer begins now!",
      task: "Help ARIA introduce herself to the digital world.",
      objective: "Write a prompt that asks ARIA to introduce herself in a friendly way",
      hint: "Try being specific about the tone and what information to include",
      successCriteria: (prompt) => {
        const lower = prompt.toLowerCase();
        return (lower.includes('introduce') || lower.includes('tell')) && 
               (lower.includes('yourself') || lower.includes('about you')) &&
               prompt.length > 20;
      },
      perfectCriteria: (prompt) => {
        const lower = prompt.toLowerCase();
        return (lower.includes('friendly') || lower.includes('warm')) ||
               (lower.includes('name') && lower.includes('purpose'));
      },
      aiResponse: (isPerfect) => isPerfect 
        ? "✨ Hello! I'm ARIA, an Adaptive Reasoning Intelligence Assistant. I'm here to help people solve problems and learn new things. I love connecting with curious minds like yours!"
        : "Hi, I'm ARIA. I assist with tasks."
    },
    {
      id: 1,
      title: "The Recipe Crisis",
      story: "ARIA needs to help a baker create a new recipe, but vague instructions lead to chaos. The baker needs something specific!",
      task: "Ask ARIA to create a cookie recipe with specific requirements",
      objective: "Include details like serving size, dietary restrictions, or special ingredients",
      hint: "Think about what makes a good recipe request: quantities, preferences, difficulty level",
      successCriteria: (prompt) => {
        const lower = prompt.toLowerCase();
        return (lower.includes('recipe') || lower.includes('cookie')) &&
               (lower.includes('chocolate') || lower.includes('oatmeal') || lower.includes('sugar') ||
                lower.includes('vegan') || lower.includes('gluten') || lower.includes('dozen') ||
                lower.includes('serving') || lower.includes('easy') || lower.includes('simple')) &&
               prompt.length > 30;
      },
      perfectCriteria: (prompt) => {
        const lower = prompt.toLowerCase();
        const specifics = [
          lower.includes('serving') || lower.includes('dozen') || /\d+/.test(prompt),
          lower.includes('vegan') || lower.includes('gluten') || lower.includes('dairy'),
          lower.includes('easy') || lower.includes('beginner') || lower.includes('simple')
        ];
        return specifics.filter(Boolean).length >= 2;
      },
      aiResponse: (isPerfect) => isPerfect
        ? "🍪 Perfect! Here's a recipe for 24 easy vegan chocolate chip cookies:\n- 2 cups flour\n- 1 cup coconut oil\n- 3/4 cup brown sugar\n- 1 cup dairy-free chocolate chips\n...\nBaking time: 12 minutes at 350°F"
        : "Here's a cookie recipe with flour, sugar, butter, and eggs. Bake until done."
    },
    {
      id: 2,
      title: "The Format Fiasco",
      story: "ARIA is helping organize a school event, but the information is coming out messy. She needs you to specify exactly how the output should look!",
      task: "Ask ARIA to list 5 team-building activities for teens",
      objective: "Specify the output format (numbered list, brief descriptions, etc.)",
      hint: "Good prompts specify both WHAT you want and HOW you want it formatted",
      successCriteria: (prompt) => {
        const lower = prompt.toLowerCase();
        return (lower.includes('list') || lower.includes('activity') || lower.includes('activities')) &&
               (lower.includes('team') || lower.includes('group')) &&
               (lower.includes('format') || lower.includes('numbered') || lower.includes('bullet') ||
                lower.includes('each') || lower.includes('description')) &&
               prompt.length > 35;
      },
      perfectCriteria: (prompt) => {
        const lower = prompt.toLowerCase();
        return (lower.includes('numbered') || lower.includes('1.')) &&
               (lower.includes('brief') || lower.includes('short') || lower.includes('sentence'));
      },
      aiResponse: (isPerfect) => isPerfect
        ? "1. Human Knot - Teams untangle themselves while holding hands (builds problem-solving)\n2. Escape Room Challenge - Solve puzzles together in 60 minutes (builds collaboration)\n3. Two Truths & a Dream - Share aspirations creatively (builds trust)\n4. Scavenger Hunt - Find items using creative clues (builds teamwork)\n5. Improv Games - Quick-thinking theater exercises (builds communication)"
        : "Human knot, escape room, scavenger hunt, improv, trust falls, team building, group activities, icebreakers..."
    },
    {
      id: 3,
      title: "The Role Assignment",
      story: "ARIA can take on different personas to help with different tasks. A student needs help understanding Shakespeare, but ARIA's being too formal!",
      task: "Ask ARIA to explain Romeo & Juliet",
      objective: "Assign ARIA a role or persona (like 'friendly tutor' or 'cool teacher')",
      hint: "Starting with 'Act as a...' or 'You are a...' can help set the right tone",
      successCriteria: (prompt) => {
        const lower = prompt.toLowerCase();
        return (lower.includes('romeo') || lower.includes('shakespeare')) &&
               (lower.includes('act as') || lower.includes('you are') || lower.includes('be a') ||
                lower.includes('like a') || lower.includes('tutor') || lower.includes('teacher') ||
                lower.includes('teen') || lower.includes('explain')) &&
               prompt.length > 30;
      },
      perfectCriteria: (prompt) => {
        const lower = prompt.toLowerCase();
        return (lower.includes('teen') || lower.includes('simple') || lower.includes('relatable') ||
                lower.includes('cool') || lower.includes('casual')) &&
               (lower.includes('act as') || lower.includes('you are'));
      },
      aiResponse: (isPerfect) => isPerfect
        ? "Okay, so Romeo & Juliet is basically the OG tragic love story! Two teenagers from families that totally hate each other fall hard for each other at a party. They secretly get married, but everything goes wrong - there's fighting, deaths, and miscommunication. In the end, they both die thinking the other is dead. It's intense but shows how hate and poor communication can destroy everything. Shakespeare was really calling out how adults' drama affects young people! 💔"
        : "Romeo and Juliet is a tragedy written by William Shakespeare concerning two young star-crossed lovers whose deaths ultimately reconcile their feuding families. The play explores themes of love, fate, and conflict."
    },
    {
      id: 4,
      title: "The Master Challenge",
      story: "You've trained well! Now ARIA faces her biggest challenge: helping create a presentation. This requires combining everything you've learned - clarity, format, role, AND examples!",
      task: "Ask ARIA to create an outline for a presentation on climate change",
      objective: "Use multiple prompt engineering techniques: specify role, format, audience, and length",
      hint: "Great prompts combine: Who should ARIA be? What format? Who's the audience? How detailed?",
      successCriteria: (prompt) => {
        const lower = prompt.toLowerCase();
        const hasRole = lower.includes('act as') || lower.includes('you are') || lower.includes('be a');
        const hasFormat = lower.includes('outline') || lower.includes('format') || lower.includes('structure');
        const hasAudience = lower.includes('teen') || lower.includes('student') || lower.includes('audience') || lower.includes('high school');
        const hasTopic = lower.includes('climate') || lower.includes('warming') || lower.includes('environment');
        
        return hasTopic && prompt.length > 40 && [hasRole, hasFormat, hasAudience].filter(Boolean).length >= 2;
      },
      perfectCriteria: (prompt) => {
        const lower = prompt.toLowerCase();
        const hasRole = lower.includes('act as') || lower.includes('you are');
        const hasFormat = lower.includes('outline') && (lower.includes('bullet') || lower.includes('point'));
        const hasAudience = lower.includes('teen') || lower.includes('high school');
        const hasDetail = lower.includes('minute') || lower.includes('slide') || /\d+/.test(prompt);
        
        return [hasRole, hasFormat, hasAudience, hasDetail].filter(Boolean).length >= 3;
      },
      aiResponse: (isPerfect) => isPerfect
        ? "🎓 CLIMATE CHANGE PRESENTATION OUTLINE (10-minute format for high school students)\n\nI. Hook (1 min)\n   • Show before/after photos of glaciers\n   • 'This changed in YOUR lifetime'\n\nII. What's Happening? (2 min)\n   • Earth's temperature rising\n   • Real-world effects teens can relate to\n\nIII. Why Should You Care? (2 min)\n   • Affects YOUR future\n   • Extreme weather, economy, health\n\nIV. What Can WE Do? (3 min)\n   • Individual actions that actually matter\n   • Community and political engagement\n\nV. Hope & Action (2 min)\n   • Success stories\n   • Call to action for your generation"
        : "Climate Change Outline:\n\n- Introduction\n- Causes\n- Effects\n- Solutions\n- Conclusion"
    }
  ];

  const handleSubmit = () => {
    const level = levels[currentLevel];
    const isSuccess = level.successCriteria(userPrompt);
    const isPerfect = isSuccess && level.perfectCriteria(userPrompt);
    
    setAttempts(attempts + 1);
    
    if (isSuccess) {
      const points = isPerfect ? 100 : 60;
      setScore(score + points);
      setFeedback(isPerfect ? 'perfect' : 'good');
    } else {
      setFeedback('tryagain');
    }
  };

  const handleNext = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setUserPrompt('');
      setFeedback('');
      setAttempts(0);
      setShowHint(false);
    }
  };

  const handleReset = () => {
    setUserPrompt('');
    setFeedback('');
    setShowHint(false);
  };

  const level = levels[currentLevel];
  const isPerfect = feedback === 'perfect';
  const isSuccess = feedback === 'good' || feedback === 'perfect';

  if (currentLevel === levels.length) {
    return React.createElement('div', { 
      className: 'min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 flex items-center justify-center' 
    },
      React.createElement('div', { className: 'max-w-2xl bg-white rounded-lg shadow-2xl p-8 text-center' },
        React.createElement(Sparkles, { className: 'w-16 h-16 text-yellow-500 mx-auto mb-4' }),
        React.createElement('h1', { className: 'text-4xl font-bold text-gray-800 mb-4' }, 'Quest Complete!'),
        React.createElement('p', { className: 'text-xl text-gray-600 mb-6' }, 
          "You've mastered the art of prompt engineering and freed ARIA!"
        ),
        React.createElement('div', { className: 'bg-purple-100 rounded-lg p-6 mb-6' },
          React.createElement('p', { className: 'text-3xl font-bold text-purple-700' }, `Final Score: ${score}`),
          React.createElement('p', { className: 'text-sm text-gray-600 mt-2' }, 
            "You've learned to craft clear, specific, and effective prompts!"
          )
        ),
        React.createElement('div', { className: 'text-left bg-blue-50 rounded-lg p-6' },
          React.createElement('h3', { className: 'font-bold text-lg mb-3 text-blue-900' }, '🎓 What You\'ve Learned:'),
          React.createElement('ul', { className: 'space-y-2 text-gray-700' },
            React.createElement('li', null, '✓ Be specific and clear in your requests'),
            React.createElement('li', null, '✓ Specify the format you want'),
            React.createElement('li', null, '✓ Assign roles or personas to the AI'),
            React.createElement('li', null, '✓ Include context about your audience'),
            React.createElement('li', null, '✓ Combine multiple techniques for complex tasks')
          )
        )
      )
    );
  }

  return React.createElement('div', { className: 'min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 md:p-8' },
    React.createElement('div', { className: 'max-w-4xl mx-auto' },
      // Header
      React.createElement('div', { className: 'bg-white rounded-lg shadow-lg p-6 mb-6' },
        React.createElement('div', { className: 'flex items-center justify-between mb-4' },
          React.createElement('h1', { className: 'text-3xl font-bold text-gray-800 flex items-center gap-2' },
            React.createElement(Sparkles, { className: 'text-purple-600' }),
            'Prompt Quest'
          ),
          React.createElement('div', { className: 'text-right' },
            React.createElement('div', { className: 'text-sm text-gray-600' }, 'Score'),
            React.createElement('div', { className: 'text-2xl font-bold text-purple-600' }, score)
          )
        ),
        React.createElement('div', { className: 'flex gap-2' },
          levels.map((_, idx) =>
            React.createElement('div', {
              key: idx,
              className: `flex-1 h-2 rounded ${
                idx < currentLevel ? 'bg-green-500' :
                idx === currentLevel ? 'bg-purple-500' :
                'bg-gray-300'
              }`
            })
          )
        ),
        React.createElement('p', { className: 'text-sm text-gray-600 mt-2' },
          `Level ${currentLevel + 1} of ${levels.length}`
        )
      ),

      // Story Section
      React.createElement('div', { className: 'bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-6 mb-6 text-white' },
        React.createElement('h2', { className: 'text-2xl font-bold mb-3' }, level.title),
        React.createElement('p', { className: 'text-lg leading-relaxed' }, level.story)
      ),

      // Task Section
      React.createElement('div', { className: 'bg-white rounded-lg shadow-lg p-6 mb-6' },
        React.createElement('h3', { className: 'text-xl font-bold text-gray-800 mb-2' }, 'Your Mission:'),
        React.createElement('p', { className: 'text-gray-700 mb-4' }, level.task),
        React.createElement('div', { className: 'bg-blue-50 border-l-4 border-blue-500 p-4' },
          React.createElement('p', { className: 'text-sm font-semibold text-blue-900' }, 'Objective:'),
          React.createElement('p', { className: 'text-blue-800' }, level.objective)
        )
      ),

      // Prompt Input
      React.createElement('div', { className: 'bg-white rounded-lg shadow-lg p-6 mb-6' },
        React.createElement('label', { className: 'block text-sm font-semibold text-gray-700 mb-2' },
          'Write your prompt for ARIA:'
        ),
        React.createElement('textarea', {
          value: userPrompt,
          onChange: (e) => setUserPrompt(e.target.value),
          className: 'w-full p-4 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none min-h-32 text-gray-800',
          placeholder: 'Type your prompt here...',
          disabled: isSuccess
        }),
        
        React.createElement('div', { className: 'flex gap-3 mt-4' },
          React.createElement('button', {
            onClick: handleSubmit,
            disabled: !userPrompt.trim() || isSuccess,
            className: 'flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors'
          }, 'Submit Prompt'),
          !isSuccess && React.createElement('button', {
            onClick: handleReset,
            className: 'px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2'
          },
            React.createElement(RotateCcw, { className: 'w-4 h-4' }),
            'Reset'
          )
        ),

        attempts > 0 && !isSuccess && !showHint && React.createElement('button', {
          onClick: () => setShowHint(true),
          className: 'mt-3 text-purple-600 hover:text-purple-800 text-sm font-semibold'
        }, '💡 Need a hint?'),

        showHint && !isSuccess && React.createElement('div', { className: 'mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4' },
          React.createElement('p', { className: 'text-sm text-yellow-800' },
            React.createElement('strong', null, 'Hint: '),
            level.hint
          )
        )
      ),

      // Feedback Section
      feedback && React.createElement('div', { className: 'bg-white rounded-lg shadow-lg p-6 mb-6' },
        isSuccess ? React.createElement('div', null,
          React.createElement('div', { className: 'flex items-center gap-3 mb-4' },
            React.createElement(CheckCircle, { className: 'w-8 h-8 text-green-500' }),
            React.createElement('h3', { className: 'text-2xl font-bold text-green-700' },
              isPerfect ? 'Perfect Prompt!' : 'Good Job!'
            )
          ),
          React.createElement('div', { className: 'bg-gray-50 rounded-lg p-4 mb-4' },
            React.createElement('p', { className: 'text-sm font-semibold text-gray-700 mb-2' }, "ARIA's Response:"),
            React.createElement('p', { className: 'text-gray-800 whitespace-pre-line' }, level.aiResponse(isPerfect))
          ),
          React.createElement('p', { className: 'text-gray-700 mb-4' },
            isPerfect 
              ? '🌟 Excellent! Your prompt was specific, clear, and well-structured. +100 points!'
              : '✓ Your prompt worked, but could be more specific for better results. +60 points!'
          ),
          React.createElement('button', {
            onClick: handleNext,
            className: 'w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2'
          },
            'Continue ',
            React.createElement(ArrowRight, { className: 'w-5 h-5' })
          )
        ) : React.createElement('div', null,
          React.createElement('div', { className: 'flex items-center gap-3 mb-4' },
            React.createElement(XCircle, { className: 'w-8 h-8 text-red-500' }),
            React.createElement('h3', { className: 'text-2xl font-bold text-red-700' }, 'Not Quite!')
          ),
          React.createElement('p', { className: 'text-gray-700' },
            'ARIA needs more guidance. Try being more specific about what you want and how you want it!'
          )
        )
      )
    )
  );
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.getElementById('root');
  if (rootElement && typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(PromptQuest));
  }
});
