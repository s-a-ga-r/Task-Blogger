frappe.pages['day-to-day-v3'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'ToDo Todays',
		single_column: true
	});

	render_template(page)
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


}