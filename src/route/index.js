// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()



var address = 'Kyiv, Kioto 19'

var header = {
  name:{
  firstname:'Oleksandra',
  lastname:'Ignatovych',
  },
  position: 'Junior Fullstack JS Developer',
  salary:'600$ в місяць',
  address,
}

var footer = {
  social:{
      email: {
        text: 'al.ignatovych@gmail.com',
        href:'mailto:al.ignatovych@gmail.com',
      },
      tel: {
        text: '+380684855830',
        href:'+380684855830',
    },
      linked: {
        text: 'LinkedIn',
        href:'https://www.linkedin.com/in/dmytro-test',
    },
    },
  }


router.get('/', function (req, res) {
  res.render('index', {})

}),


router.get('/summary', function (req, res) {
  res.render('summary', {

    header,
    page:{
      title: 'Resume | Summary',
    },      
    main:{
      summary:{
      title:'Summary',
      text:'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to `work on a new project I learn the domain and try to understand the idea of the project. Good team`player, every colleague is a friend to me.',
    },
    experience:{
      title:'Other experience',
      text:'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
    },
    },
    footer
  } 
)
})

router.get('/skills', function (req, res) {
  res.render('skills', {

    header,
    page:{
      title: 'Resume | Skills',
    },      
    main:{ 
      skills:[
        {
          name:'HTML',
          point: 10,
          isTop: true,
        },
        {
          name:'Handlebars',
          point: 3,
          isTop: false,
        },
        {
          name:'VS Code & NPM',
          point: 5,
          isTop: true,
        },
        {
          name:'GIT',
          point: 8,
          isTop: false,
        },
        {
          name:'React',
          point: 0,
          isTop: false,
        },
        {
          name:'PHP',
          point: null,
          isTop: false,
        },
      ],
      hobbies:[
        {
          name:'dance',
          isMain: true,
        },
        {
          name:'sing',
          isMain: false,
        },
        {
          name:'run',
          isMain: true,
        },
      ]
    },
    footer
  } 
  )
})

router.get('/education', function (req, res) {
  res.render('education', {

    header,
    page:{
      title: 'Resume | Education',
    },      
    main:{
      educations:[
        {
          name:'it school',
          isEnd: true,
        },
        {
          name:'SUTE',
          isEnd: true,
        },
        {
          name:'school of JS',
          isEnd: false,
        },
      ],
         certificates:[
          {
          name: 'Diploma1',
          id: 122342 ,
          },
          {
          name: 'Diploma2',
          id: 254852 ,
          },
          {
          name: 'Diploma3',
          id: 320842 ,
          },
         ],
    },
    footer
  } 
)
})

router.get('/work', function (req, res) {
  res.render('work', {

    layout: 'big',

    header,

    page:{
      title: 'Resume | Work',
    },  

    main:{
      works: [{
        position: 'Junior Fullstack Developer',
        company:{
          name: 'IT brains',
          url: 'https://it-brains.com.ua/',
        },
        duration:{
          from: '10.10.2022',
          to: null,
        },
        projectAmount: 3,

        projects:[{
          name:'Resume',
          url: 'https://resume.com.ua/',
          about: 'Information about project',
          stacks:[
          {
            name: 'React.JS',
          },
          {
            name: 'HTML&CSS',
          },
          {
            name: 'Nodejs',
          },
        ],
          awards:[
          {
            name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
          },
          {
            name: 'Lorem ipsum dolor sit amet',
          },
        ],
        awardAmount: 6,
        stackAmount: 5,
        }
        ]
      },
      ],
     
    },

    footer
  } 
)
}),

router.get('/person', function (req, res) {
  res.render('person', {
    layout: 'person',

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})



module.exports = router
