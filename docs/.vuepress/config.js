module.exports = {
    base:'/notice/dist/',
    dest:'dist',
    title:'课程大纲',
    description:'专业高级大纲整理与改进',
    themeConfig:{ 
        nav:[
            {
                text:'课程大纲',
                items:[

                    {text:'概要记录',link:'/info/1.html'},
                    {text:'pc端项目整合',link:'/outline/lesson0/1.html'},
                    {text:'移动端开发',link:'/outline/lesson1/1.html'},
                    {text:'移动项目整合',link:'/outline/lesson2/1.html'}
                ]
            }
        ],
        sidebar:{
            '/info/':[
                ['1','概要记录']
            ],
            '/outline/lesson0/':[
                ['1','知识点'],
                ['2','案例(项目)']
            ],
            '/outline/lesson1/':[
                ['1','知识点'],
                ['2','案例']
            ],
            '/outline/lesson2/':[
                ['1','知识点'],
                ['2','案例']
            ]


        },
        sidebarDepth: 2
    },
    markdown: {
        lineNumbers: true
    }
        
    
}