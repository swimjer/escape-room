export default {

    start: {
        text: `It's not easy to swim the channel. There are lots of challenges and puzzles to solve first. First things first: applying to attend the swim trials. `,
        images: ['White_Cliffs_of_Dover.jpeg'],
    },

    steps: [
        {
            id: 1,
            text: `Brill! Your application for the trials was approved. You are a super starfish! You are going to the swim trials. 
You need to get on the bus to the swimming pool, but you forgot to write the bus number down. You feel like a right flounder!`,
            question: `What's the number of the bus you need to get on?`,
            images: ['buses.jpg'],
            solutions: ['588'],
            feedback: 'Type the bus number, using digits',
            hint: `Look for the fishy words!`,
            next: {
                '588': 2
            }
        },

        {
            id: 2,
            text: `Hurray! You got on the right bus and arrived at the pool for the swim trials. Time to swim your best.`,
            question: 'What swimming stroke goes on toast?',
            images: ['swimming_pool_swimmers.jpg'],
            solutions: ['butterfly', 'butter-fly', 'butter fly'],
            feedback: '',
            next: {
                'butterfly': 3,
                'butter-fly': 3,
                'butter fly': 3,
            },
        },

        {
            id: 3,
            text: `Well done swimmer, you have been chosen for the team! Time for lots of training. As well as swimming, you need to get used to cold water. Let's run a nice cold bath and get in.
            
Brrrr! Here's a puzzle to take your mind off the cold.

If 

eel = 3 
cod = 6
guppy = 13

What is pike? 
`,
            question: '',
            images: ['bath.jpg'],
            solutions: ['10'],
            feedback: 'Enter a number',
            hint: 'Are you scrabbling to find an answer?',
            next: {
                '10': 4
            },
        },
        {
            id: 4,
            text: `As well as swimming inside, it's a good idea to get in plenty of swim training outside. Fortunately there are a lot of places to practice.`,
            question: 'Which place is the odd one out?',
            images: ['world_map.png', 'sticker_swimming_cinque_terre.jpg', 'sticker_swim_fuji.jpg', 'sticker_swim_edinburgh.jpg', 'sticker_swimming_new_york.jpg'],
            solutions: ['japan'],
            feedback: 'Enter the name of the country. Which one is the odd one out?',
            hint: 'Find these places on the world map',
            next: {
                'japan': 5
            },
        },


        {
            id: 5,
            text: `Another Training question.`,
            question: '',
            images: [],
            solutions: [''],
            feedback: '',
            hint: '',
            next: {
                '': 6
            },
        },

        {
            id: 6,
            text: `Getting to Dover question.`,
            question: '',
            images: [],
            solutions: [''],
            feedback: '',
            hint: '',
            next: {
                '': 7
            },
        },


        {
            id: 7,
            text: `On the boat question.
            Fill-in-the blanks nautical phrases`,
            question: '',
            images: [],
            solutions: [''],
            feedback: '',
            hint: '',
            next: {
                '': 8
            },
        },

        {
            id: 8,
            text: `Swimming question`,
            question: '',
            images: [],
            solutions: [''],
            feedback: '',
            hint: '',
            next: {
                '': 11
            },
        },


        {
            id: 11,
            text: `Time to get back into the boat for a rest. Your towel is in your locker but you have forgotten the code. The locker has a directional lock. What's the code?`,
            question: `What's the locker combination?`,
            images: ['jellyfish_left.jpg','jellyfish_down.jpg', 'jellyfish_up.jpg', 'jellyfish_right.jpg'],
            solutions: ['ldur'],
            feedback: 'Enter 4 letters. Type L for left, R for right, U for up and D for down. Don\'t use spaces.',
            // hint: '',
            next: {
                'ldur': 12
            },
        },

        {
            id: 12,
            text: `More swimming figure out compass heading question`,
            question: ``,
            images: [''],
            solutions: [''],
            feedback: '',
            // hint: '',
            next: {
                '': 13
            },
        },


        {
            id: 13,
            text: `More swimming`,
            question: ``,
            images: [''],
            solutions: [''],
            feedback: '',
            // hint: '',
            next: {
                '': 14
            },
        },

        {
            id: 14,
            text: `More swimming`,
            question: ``,
            images: [''],
            solutions: [''],
            feedback: '',
            // hint: '',
            next: {
                '': 15
            },
        },
        {
            id: 15,
            text: `France is in sight!`,
            question: ``,
            images: ['arrive_beach.jpg'],
            solutions: [''],
            feedback: '',
            // hint: '',
            next: {
                '': '16'
            },
        },

        {
            id: 16,
            text: `And you made it to beach at Calais! Congratulations! 
            
You are really exhausted, but very happy to have made it. And you are really hungry too. Can you rearange these things to figure out what will you gave to eat?`,
            question: `What will you have to eat?`,
            images: ['ant.jpg', 'scissors.jpg'],
            solutions: ['croissants', 'croissant'],
            feedback: '',
            // hint: '',
            next: {
                'croissants': 'end',
                'croissant': 'end'
            },
        },

    ],
    end: {
        text: `Congratulations! You have swum the channel! Time for a delicious croissant or three before heading home.`,
        images: ['croissants.jpg'],
    }

}