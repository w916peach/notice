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
                    {text:'移动端开发',link:'/outline/lesson1/1.html'},
                    {text:'移动项目整合',link:'/outline/lesson2/1.html'},
                ]
            }
        ],
        sidebar:{
            '/info/':[
                ['1','哈哈']
            ],
            '/outline/lesson1/':[
                ['1','知识点'],
                ['2','案例']
            ],
            '/outline/lesson2':[
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