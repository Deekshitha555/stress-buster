"use client"
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Question 1",
      value: "question1",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How often do you feel stressed or overwhelmed in your daily life?</p>
          <Question1 />
        </div>
      ),
    },
    {
      title: "Question 2",
      value: "question2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What are the most common stressors in your life? (Select all that apply)</p>
          <Question2 />
        </div>
      ),
    },
    {
      title: "Question 3",
      value: "question3",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What strategies do you use to cope with stress? (Select all that apply)</p>
          <Question3 />
        </div>
      ),
    },
    {
      title: "Question 4",
      value: "question4",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Which of the following activities help you relax after a stressful day? (Select all that apply)</p>
          <Question4 />
        </div>
      ),
    },
    {
      title: "Question 5",
      value: "question5",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What triggers your stress the most in your day-to-day activities? (Select all that apply)</p>
          <Question5 />
        </div>
      ),
    },
    {
      title: "Question 6",
      value: "question6",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What types of environments make you feel more stressed? (Select all that apply)</p>
          <Question6 />
        </div>
      ),
    },
    {
      title: "Question 7",
      value: "question7",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Which of these emotions do you often experience when you are stressed? (Select all that apply)</p>
          <Question7 />
        </div>
      ),
    },
    {
      title: "Question 8",
      value: "question8",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>When you are feeling stressed, which of the following would help you feel better? (Select all that apply)</p>
          <Question8 />
        </div>
      ),
    },
    {
      title: "Question 9",
      value: "question9",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What activities do you engage in to prevent stress from building up in your life? (Select all that apply)</p>
          <Question9 />
        </div>
      ),
    },
    {
      title: "Question 10",
      value: "question10",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How often do you feel that stress negatively impacts your mental or physical health? (Select all that apply)</p>
          <Question10 />
        </div>
      ),
    },
    {
      title: "Question 11",
      value: "question11",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How often do you feel that stress negatively impacts your mental or physical health? (Select all that apply)</p>
          <Question11 />
        </div>
      ),
    },
    {
      title: "Question 12",
      value: "question12",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How often do you feel that stress negatively impacts your mental or physical health? (Select all that apply)</p>
          <Question12 />
        </div>
      ),
    },{
      title: "Question 13",
      value: "question13",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How often do you feel that stress negatively impacts your mental or physical health? (Select all that apply)</p>
          <Question13 />
        </div>
      ),
    },
    {
      title: "Question 14",
      value: "question14",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How often do you feel that stress negatively impacts your mental or physical health? (Select all that apply)</p>
          <Question14 />
        </div>
      ),
    },
    {
      title: "Question 15",
      value: "question15",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How often do you feel that stress negatively impacts your mental or physical health? (Select all that apply)</p>
          <Question15 />
        </div>
      ),
    },
  
  ];
  return (
    <div className="h-[20rem] mobile:h-[40rem] [perspective:1000px] relative flex flex-col items-center justify-center w-full sm:w-[80%] md:w-[800px] my-20 ">
      <Tabs tabs={tabs} />
    </div>
  );
}  

// Question Components
const Question1 = () => {
  return (
    <div className="flex flex-col mt-8">
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Never
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Occasionally
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Frequently
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Almost Always
      </label>
    </div>
  );
};

const Question2 = () => {
  return (
    <div className="flex flex-col mt-8">
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Work/Study pressure
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Personal life challenges
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Health-related concerns
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Family and relationships
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Financial issues
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Lack of personal time
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> External expectations
      </label>
    </div>
  );
};

const Question3 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Listening to music
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Meditation or mindfulness practices
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Physical exercises or yoga
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Talking to friends or family
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Engaging in hobbies or creativity
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Taking naps or resting
      </label>
    </div>
  );
};

const Question4 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Reading a book
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Watching movies or shows
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Taking a walk outdoors
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Listening to calming music
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Meditating or practicing mindfulness
      </label>
    </div>
  );
};

const Question5 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Tight deadlines
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Lack of work-life balance
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Poor health or illness
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Conflicts with others
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Financial uncertainty
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Personal doubts or lack of confidence
      </label>
    </div>
  );
};

const Question6 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Workplaces with high noise levels
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Crowded public spaces
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Messy or cluttered environments
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> High-pressure social situations
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Environments with little privacy or personal space
      </label>
    </div>
  );
};

const Question7 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Anxiety
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Irritability
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Exhaustion
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Overwhelm
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Restlessness
      </label>
    </div>
  );
};

const Question8 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Listening to calming music
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Taking a break outdoors
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Engaging in physical exercise
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Talking to a friend or family member
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Practicing mindfulness
      </label>
    </div>
  );
};

const Question9 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Regular exercise routines
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Meditation and mindfulness practices
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Time management techniques
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Having a strong support system
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Personal hobbies or creative outlets
      </label>
    </div>
  );
};

const Question10 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Often feel fatigued or run down
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Difficulty focusing or concentrating
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Physical symptoms like headaches or muscle tension
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Emotional instability or mood swings
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Increased anxiety or feelings of hopelessness
      </label>
    </div>
  );
};
const Question11 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I listen to calming music when feeling stressed
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I practice yoga for relaxation
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I prefer guided meditation for stress relief
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I find breathing exercises helpful in calming my mind
      </label>
    </div>
  );
};

const Question12 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I follow a healthy eating routine to manage stress
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I enjoy participating in wellness webinars for stress management tips
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I find it beneficial to have daily motivational quotes or affirmations
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I use stress tests to assess my mental health regularly
      </label>
    </div>
  );
};

const Question13 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I like to practice mindfulness exercises to stay grounded
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I find stress relief yoga routines to be effective for my mental health
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I prefer therapy sessions to handle emotional distress
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I engage in physical fitness routines to relieve stress
      </label>
    </div>
  );
};

const Question14 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I struggle with maintaining a balanced work-life routine
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I often experience anxiety or overwhelm in busy situations
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I find it difficult to unwind and relax at night
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I have difficulty finding time for self-care
      </label>
    </div>
  );
};

const Question15 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I enjoy trying new wellness recipes that promote mental clarity
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I feel more relaxed after a peaceful sleep routine
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I like exploring spiritual practices to enhance my well-being
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> I feel more energetic after participating in fitness activities
      </label>
    </div>
  );
};


