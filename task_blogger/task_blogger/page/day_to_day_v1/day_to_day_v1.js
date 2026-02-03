frappe.pages['day-to-day-v1'].on_page_load = function (wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Day To Day',
        single_column: true
    });

    render_template(page)

    // frappe.require('/assets/task_manager/js/date_carousel_2.js', () => {
    //     if (!window.dateCarouselInstance) {
    //         window.dateCarouselInstance = new frappe.ui.DateCarousel();
    //     }
    // });

    // frappe.require('/assets/task_blogger/js/component/date_carousel_2.js', () => {
    //     if (!window.dateCarouselInstance) {
    //         console.log("hello");
            
    //         window.dateCarouselInstance = new frappe.ui.DateCarousel();
    //     }
    // });

    frappe.require('/assets/task_blogger/js/component/date_carousel_small.js', () => {
        if (!window.dateCarouselInstance) {
            // window.dateCarouselInstance = new frappe.ui.DateCarousel();
            console.log("heloo");
            window.dateCarouselInstance = new frappe.ui.DateCarousel({
                onDateChange: function (selectedDate) {
                    console.log('Selected date:', selectedDate);
                    // Call your render function with the selected date
                    // const dateString = "Sat Dec 13 2025 12:12:36 GMT+0530 (India Standard Time)";
                    // Create a Date object from the string
                    const dateObject = new Date(selectedDate);

                    // Extract year, month, and day
                    const year = dateObject.getFullYear();
                    // Months are 0-indexed, so add 1 and pad to ensure two digits
                    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
                    const day = dateObject.getDate().toString().padStart(2, '0');

                    // Combine into YYYY-MM-DD format
                    // const formattedDate = `${year}-${month}-${day}`;

                    const formattedDate = `${day}-${month}-${year}`;

                    // render_template(page, formattedDate);


                    $(".timeline").empty()



                    page.set_title(__(formattedDate));

                    Logs(formattedDate)


                }
            });

        }
    });
}

function render_template(page) {
    const page_html = `
            <div class="container1">

                <div class="main-content">
            
                    <!-- Timeline -->

                    <div class="timeline">
                        <!-- Initial Comment -->

                        

                        <!-- Maybe in another life, in another year, in another night, in another hour
                                We will meet again. 
                                Without fears, without tears.
                                Only with love ! its -->
            
                        <!-- Timeline Events -->
                        <!-- <div class="timeline-event">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23f0f0f0' rx='20'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%23666'%3ER%3C/text%3E%3C/svg%3E" alt="revant" class="avatar">
                            <span><strong>revant</strong> changed the title <span class="strike-through">upgrade nodejs to v18 for develop</span> upgrade images for dependencies on Jun 21, 2023</span>
                        </div>

                        <div class="timeline-event">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23f0f0f0' rx='20'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%23666'%3ER%3C/text%3E%3C/svg%3E" alt="revant" class="avatar">
                            <span><strong>revant</strong> mentioned this on Jun 25, 2023</span>
                        </div>

                        <div class="timeline-event">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23f0f0f0' rx='20'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%23666'%3ER%3C/text%3E%3C/svg%3E" alt="revant" class="avatar">
                            <span>🔗 <strong>ci: refactor</strong> #1158</span>
                        </div>

                        <div class="timeline-event">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23f0f0f0' rx='20'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%23666'%3ER%3C/text%3E%3C/svg%3E" alt="revant" class="avatar">
                            <div class="timeline-icon closed">✓</div>
                            <span><strong>revant</strong> closed this as <strong>completed</strong> on Jun 25, 2023</span>
                        </div> -->
                    </div>


                    <!-- Add Comment Section -->

                    <div class="add-comment">
                        <!-- <h3 style="margin-bottom: 16px;">Add a comment</h3> -->
                        <div class="comment-form">
                            <div class="form-header">
                                <button class="tab active" data-tab="write">Write</button>
                                <button class="tab" data-tab="preview">Preview</button>
                            </div>
                            <div class="form-body">
                                <textarea 
                                    id="comment-textarea" 
                                    placeholder="Use Markdown to format your comment"
                                ></textarea>
                                <div id="preview-content" style="display: none; padding: 16px; min-height: 200px; color: #8b949e; line-height: 1.5;">
                                    Nothing to preview
                                </div>
                            </div>
                            <div class="form-footer">
                                <div class="file-upload">
                                    📎 Paste, drop, or click to add files
                                </div>
                                <div class="form-actions">
                                    <button class="reopen-btn">
                                        🔄 Reopen issue
                                    </button>
                                    <button class="comment-btn" id="comment-submit" disabled>Comment</button>
                                </div>
                            </div>
                        </div> 

                        <div class="guidelines">
                            ℹ️ Maybe in another life, in another year, in another night, in another hour
                            We will meet again. 
                            Without fears, without tears.
                            Only with love ! its <a href="#">contributing guidelines</a> and <a href="#">code of conduct</a>.
                        </div>

                    </div>

                </div>

                 <!-- Sidebar -->

                <div class="sidebar">

                    <h3>Task Dashboard</h3>
                    <p class="sidebar-description">Track your daily tasks and monitor your progress.</p>
                    
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-number" id="totalTasks">0</div>
                            <div class="stat-label">Total Tasks</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" id="todayTasks">0</div>
                            <div class="stat-label">Today</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" id="completedTasks">0</div>
                            <div class="stat-label">Completed</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" id="pendingTasks">0</div>
                            <div class="stat-label">Pending</div>
                        </div>
                    </div>

                    <ul class="sidebar-menu">
                        <!-- <li onclick="filterTasks('all')">All Tasks</li>
                        <li onclick="filterTasks('today')">Today's Tasks</li>
                        <li onclick="filterTasks('high')">High Priority</li>
                        <li onclick="filterTasks('completed')">Completed</li>
                        <li onclick="filterTasks('pending')">Pending</li> -->

                        <li>All Tasks</li>
                        <li>Todays Tasks</li>
                        <li>High Priority</li>
                        <li>Completed</li>
                        <li>Pending</li>
                    </ul>
                </div>
				
			</div>`

    $(page.body).append(page_html)






    const tabs = document.querySelectorAll('.tab');
    const textarea = document.getElementById('comment-textarea');
    const previewContent = document.getElementById('preview-content');
    const commentBtn = document.getElementById('comment-submit');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            if (tab.dataset.tab === 'write') {
                textarea.style.display = 'block';
                previewContent.style.display = 'none';
            } else {
                textarea.style.display = 'none';
                previewContent.style.display = 'block';

                // Simple markdown preview
                const content = textarea.value;
                if (content.trim()) {
                    previewContent.innerHTML = content
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        .replace(/`(.*?)`/g, '<code style="background: #21262d; padding: 2px 4px; border-radius: 3px;">$1</code>')
                        .replace(/\n/g, '<br>');
                    previewContent.style.color = '#c9d1d9';
                } else {
                    previewContent.innerHTML = 'Nothing to preview';
                    previewContent.style.color = '#8b949e';
                }
            }
        });
    });

    // Enable/disable comment button
    textarea.addEventListener('input', (e) => {
        commentBtn.disabled = !e.target.value.trim();
    });

    // Add new comment
    commentBtn.addEventListener('click', () => {
        const content = textarea.value.trim();
        if (!content) return;

        // Create new comment element
        // console.log("content",content,"userfullname",frappe.session.user_fullname,);
        addComment(content); // add comment function


        // let reference_name = await frappe.xcall("your_app.api.get_status");


        // frappe
        //     .xcall("frappe.desk.form.utils.add_comment", {
        //         reference_doctype: "Daily Log",
        //         reference_name: reference_name,
        //         content: content,
        //         comment_email: frappe.session.user,
        //         comment_by: frappe.session.user_fullname,
        //     })
        //     .then((comment) => {
        //         if(comment){
        //             console.log("comment added successfully to doctype Daily log");
        //         }
        //         // let comment_item =
        //         // this.frm.timeline.get_comment_timeline_item(comment);
        //         // this.frm.comment_box.set_value("");
        //         // frappe.utils.play_sound("click");
        //         // this.frm.timeline.add_timeline_item(comment_item);
        //         // this.frm.get_docinfo().comments.push(comment);
        //         // this.frm.sidebar.refresh_comments_count &&
        //         // this.frm.sidebar.refresh_comments_count();
        //     })



        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        const now = new Date();
        const timestamp = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        timelineItem.innerHTML = `
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%234ade80' rx='20'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='white'%3EU%3C/text%3E%3C/svg%3E" alt="You" class="avatar">
                <div class="timeline-content">
                    <div class="comment-header">
                        <div class="comment-meta">
                            <a href="#" class="username">You</a>
                            <span class="timestamp">on ${timestamp}</span>
                        </div>
                        <div class="comment-actions">
                            <button class="menu-button">⋯</button>
                        </div>
                    </div>
                    <div class="comment-body">
                        <p>${content.replace(/\n/g, '<br>')}</p>
                        
                    </div>
                </div>
            `;

        // Insert before the add comment section
        const timeline = document.querySelector('.timeline');
        timeline.appendChild(timelineItem);

        // Clear the textarea and reset button
        textarea.value = '';
        commentBtn.disabled = true;

        // Switch back to write tab
        tabs.forEach(t => t.classList.remove('active'));
        tabs[0].classList.add('active');
        textarea.style.display = 'block';
        previewContent.style.display = 'none';
    });

    // Handle reactions
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('reaction')) {
            // Toggle reaction (simplified)
            const reaction = e.target;
            const text = reaction.textContent;
            const count = parseInt(text.split(' ')[1]) || 0;

            if (reaction.classList.contains('reacted')) {
                reaction.classList.remove('reacted');
                reaction.textContent = text.replace(/\d+/, Math.max(0, count - 1));
                reaction.style.backgroundColor = '#21262d';
            } else {
                reaction.classList.add('reacted');
                reaction.textContent = text.replace(/\d+/, count + 1);
                reaction.style.backgroundColor = '#1f6feb20';
            }
        }
    });

    // File upload simulation
    document.querySelector('.file-upload').addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.accept = 'image/*,.pdf,.txt,.md';

        input.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            if (files.length > 0) {
                const fileNames = files.map(f => f.name).join(', ');
                textarea.value += `\n\nAttached files: ${fileNames}`;
                commentBtn.disabled = false;
            }
        });

        input.click();
    });

    // Drag and drop support
    const formBody = document.querySelector('.form-body');

    formBody.addEventListener('dragover', (e) => {
        e.preventDefault();
        formBody.style.backgroundColor = '#1f6feb20';
    });

    formBody.addEventListener('dragleave', () => {
        formBody.style.backgroundColor = '';
    });

    formBody.addEventListener('drop', (e) => {
        e.preventDefault();
        formBody.style.backgroundColor = '';

        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            const fileNames = files.map(f => f.name).join(', ');
            textarea.value += `\n\nDropped files: ${fileNames}`;
            commentBtn.disabled = false;
        }
    });
}

function Logs(date) {
    frappe.xcall("task_blogger.task_blogger.page.day_to_day_v1.day_to_day_v1.get_log", {
        date: date
    }).then((comments) => {
        if (comments) {

            comments.forEach(cment => {

                let comment = `<div class="timeline-item">
                    <span class="avatar avatar-medium" title="Administrator">
                        <div class="avatar-frame standard-image"
                            style="background-color: var(--dark-green-avatar-bg); color: var(--dark-green-avatar-color)"
                            title="Administrator">A</div>
                    </span>
                        <div class="timeline-content">
                            <div class="comment-header">
                                <div class="comment-meta">
                                    <a href="#" class="username">${cment.comment_by}</a>
                                    <span class="badge">Collaborator</span>
                                    <span class="badge">Author</span>
                                    <span class="timestamp">${cment.creation}</span>
                                </div>
                                <div class="comment-actions">
                                    <button class="menu-button">⋯</button>
                                </div>
                            </div>
                            <div class="comment-body">
                                <p>
                                    ${cment.content}
                                </p>
                                <div class="reaction-bar">
                                    <!-- <div class="reaction">👍 1</div> -->
                                </div>
                            </div>
                        </div>

                        <span class="level-item select-like">
                            <input class="list-row-checkbox" type="checkbox" data-doctype="Daily Log" data-name="o18nomgbjm"/>
                        </span>
                    </div>
                    `
                $(".timeline").append(comment)
            });


        }
    })

}


async function addComment(content) {
    // get reference name using xcall
    let reference_name = await frappe.xcall("task_blogger.task_blogger.page.day_to_day_v1.day_to_day_v1.get_docname");

    // add comment
    frappe
        .xcall("frappe.desk.form.utils.add_comment", {
            reference_doctype: "Daily Log",
            reference_name: reference_name,
            content: content,
            comment_email: frappe.session.user,
            comment_by: frappe.session.user_fullname,
        })
        .then((comment) => {
            if (comment) {
                console.log("comment added successfully to doctype Daily Log");
                frappe.utils.play_sound("click");
            }
        });
}
