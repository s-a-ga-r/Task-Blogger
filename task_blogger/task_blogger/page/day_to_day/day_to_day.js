frappe.pages['day-to-day'].on_page_load = function(wrapper) {
	 new DayToDay(wrapper);
}

class DayToDay{
	constructor(wrapper) {
        this.wrapper = wrapper;
        this.init();
    }
	init() {
        this.page = frappe.ui.make_app_page({
            parent: this.wrapper,
            title: 'Day To Day',
            single_column: true
        })
        this.renderTemplate();
    }

	renderTemplate() {
        console.log("renderTemplate Called");
        //  this.page-head flex.empty();
        $(".page-head").html("")
        $(frappe.render_template("day_to_day", {})).appendTo(this.page.main);
        this.posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        
    }


	initSampleData() {
        if (this.posts.length === 0) {
            this.posts = [
                {
                    id: 1,
                    author: 'CoreyMS',
                    title: 'My Latest Post!',
                    content: 'My latest post! This is exciting...\n\nThis will be a good overview of how to use the Django framework. I hope you all learn a lot and enjoy the series!',
                    date: 'August 27, 2018',
                    avatar: 'C'
                },
                {
                    id: 2,
                    author: 'TestUser',
                    title: 'Top 5 YouTube Channels For Learning Programming',
                    content: 'Quo inanis quando ea, mel an vide adversarium suscipiantur. Et dicunt eleifend splendide pro. Nibh animal dolorem vim ex, nec te agam referrentur. Usu admodum ocurreret ne.\n\nEt dico audire cotidieque sed, cibo latine ut has, an case magna alienum.',
                    date: 'August 26, 2018',
                    avatar: 'T'
                },
                {
                    id: 3,
                    author: 'TestUser',
                    title: 'The Rise of Data Science',
                    content: 'Per omittam placerat at. Eius aeque ei mei. Usu ex partiendo salutandi. Pro illud placerat molestiae ex, habeo vidisse volutpatum cu vel, efficiendi accommodare eum ea! Ne has case minimum facilisis, pertinax efficiendi eu vel!\n\nEt movet semper assueverit his. Mei et liber vitae. Vix et pericula definebas, vero falli.',
                    date: 'August 26, 2018',
                    avatar: 'T'
                },
                {
                    id: 4,
                    author: 'TestUser',
                    title: '5 Tips for Writing Catchy Headlines',
                    content: 'Learn how to write headlines that grab attention and keep readers engaged. These simple techniques will help you create compelling titles for your blog posts.',
                    date: 'August 26, 2018',
                    avatar: 'T'
                }
            ];
            this.savePosts();
        }
    }

	

}