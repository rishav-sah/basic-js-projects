// local data for review card just for practice
const reviews = [
  {
    id: 1,
    name: 'Brad Traversy',
    job: 'web developer',
    img: 'https://i.udemycdn.com/user/200_H/21681922_4513_5.jpg',
    text: 'Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff.',
  },
  {
    id: 2,
    name: 'Dev Ed',
    job: 'web designer',
    img: 'https://yt3.ggpht.com/ytc/AAUvwnhYs6E9SqtWTikVdaGFwXzNmXPTR6ko2gNkZi-fEw=s900-c-k-c0x00ffffff-no-rj',
    text: 'Ed, better known online as Dev Ed, is a Romanian-German YouTuber who makes programming and design videos. He is mostly known for his web development tutorials, as that is his main type of video.',
  },
  {
    id: 3,
    name: 'Ben Awad',
    job: 'backend developer',
    img: 'https://avatars.githubusercontent.com/u/7872329?v=4',
    text: "I'm a Software Consultant who enjoys making programming videos on YouTube and building a cooking app called Saffron. My favorite technologies right now are: React.js, Typescript, GraphQL, Node.js, and PostgreSQL.",
  },
  {
    id: 4,
    name: 'Mark Zuckerberg',
    job: 'the boss',
    img: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg',
    text: 'Mark Zuckerberg is a self-taught computer programmer and co-founder, chair, and chief executive officer of Facebook (FB), which he founded in his Harvard University dorm room in 2004 along with Andrew McCollum, Dustin Moskovitz, Chris Hughes, and Eduardo Saverin.',
  },
]

// selecting items
const img = document.querySelector('.profile__img')
const author = document.querySelector('.review__author')
const job = document.querySelector('.review__job')
const info = document.querySelector('.review__info')

// selecting buttons
const prevBtn = document.querySelector('.btn__previous')
const nextBtn = document.querySelector('.btn__next')
const randomBtn = document.querySelector('.btn__random')

// initializing review card

let currentItem = 0

window.addEventListener('DOMContentLoaded', showPerson(currentItem))

// show person based on item

function showPerson(person) {
  const item = reviews[person]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

// showing next profile

nextBtn.addEventListener('click', () => {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson(currentItem)
})

// showing previous profile

prevBtn.addEventListener('click', () => {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson(currentItem)
})

// showing random profile
randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson(currentItem)
})
