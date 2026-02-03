frappe.pages['day-to-day-v2'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Day To Day',
		single_column: true
	});

	 render_template(page)
     
}


function render_template(page){
    console.log("hello");

	const page_html = `<div class="container1">
				<!-- Timeline -->
				<div class="timeline">
					<!-- Initial Comment -->
					<div class="timeline-item">
						<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23f0f0f0' rx='20'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%23666'%3ER%3C/text%3E%3C/svg%3E" alt="revant" class="avatar">
						<div class="timeline-content">
							<div class="comment-header">
								<div class="comment-meta">
									<a href="#" class="username">revant</a>
									<span class="badge">Collaborator</span>
									<span class="badge">Author</span>
									<span class="timestamp">on Jun 21, 2023</span>
								</div>
								<div class="comment-actions">
									<button class="menu-button">⋯</button>
								</div>
							</div>
							<div class="comment-body">
								<p><strong>Maybe </strong> in another life, in another year, in another night, in another hour
							We will meet again. 
							Without fears, without tears.
							Only with love ! its <a href="https://bits.debian.org/2023/06/bookworm-released.html">https://bits.debian.org/2023/06/bookworm-released.html</a>. Images can start using <code>bookworm</code> instead of <code>bullseye</code>. May need changes in <code>apt-get</code> dependencies.</p>
								<div class="reaction-bar">
									<div class="reaction">👍 1</div>
								</div>
							</div>
						</div>
					</div>
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
			</div>`

        console.log("page",page);

		$(page.body).append(page_html)


		const tabs = document.querySelectorAll('.tab');
        const textarea = document.getElementById('comment-textarea');
        const previewContent = document.getElementById('preview-content');
        const commentBtn = document.getElementById('comment-submit');


        console.log(tabs);

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
                    console.log(content);
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

            console.log(content);

            // Create new comment element
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

                console.log(text);
                
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