frappe.pages['day-to-day-v3'].on_page_load = function (wrapper) {
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
        <!-- Issue Header -->
        <div class="issue-header">
            <div class="issue-title">Add support for dark mode</div>
            <div class="issue-meta">#42 opened 2 days ago by <strong>john-dev</strong></div>
        </div>

        <!-- Comments Section -->
        <div class="comments-section" id="commentsSection">
            <!-- Comments will be added here -->
        </div>

        <!-- Add Comment Section -->

        <div class="comment-container">
            <div class="comment-header">
                <div class="user-avatar"></div>
                <div class="comment-title">Add a comment</div>
            </div>

            <div class="editor-container">
                <div class="tabs">
                    <button class="tab active" data-tab="write">Write</button>
                    <button class="tab" data-tab="preview">Preview</button>
                </div>

                <div class="toolbar">
                    <button class="toolbar-button" title="Bold (Ctrl+B)">
                        <strong>B</strong>
                    </button>
                    <button class="toolbar-button" title="Italic (Ctrl+I)">
                        <em>I</em>
                    </button>
                    <button class="toolbar-button" title="Strikethrough">
                        <s>S</s>
                    </button>
                    <div class="toolbar-divider"></div>
                    <button class="toolbar-button" title="Unordered list">
                        ☰
                    </button>
                    <button class="toolbar-button" title="Ordered list">
                        1️⃣
                    </button>
                    <button class="toolbar-button" title="Quote">
                        ❝
                    </button>
                    <button class="toolbar-button" title="Code">
                        &lt;/&gt;
                    </button>
                    <div class="toolbar-divider"></div>
                    <button class="toolbar-button" title="Link">
                        🔗
                    </button>
                    <button class="toolbar-button" title="Mention">
                        @
                    </button>
                    <button class="toolbar-button" title="Reference">
                        #
                    </button>
                    <button class="toolbar-button" title="Attach files">
                        📎
                    </button>
                </div>

                <div class="editor-content">
                    <div class="tab-content active" id="write-tab">
                        <textarea id="comment-text" placeholder="hello, im doing extra work today..."></textarea>
                    </div>
                    <div class="tab-content" id="preview-tab">
                        <div class="preview-content" id="preview-content">
                            Start typing to see preview...
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <div class="footer-info">
                        <div class="footer-info-item" title="Markdown supported">
                            📝 Markdown is supported
                        </div>
                        <div class="footer-info-item" title="Paste, drop, or click to add files">
                            📎 Paste, drop, or click to add files
                        </div>
                    </div>
                    <button class="comment-button" id="comment-btn">Comment</button>
                </div>
            </div>
        </div>

        
    </div>`

    $("#body").append(page_html)


}