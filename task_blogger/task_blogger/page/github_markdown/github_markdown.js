frappe.pages['github-markdown'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'github-markdown',
		single_column: true
	});

	renderHtml(page)
}


function renderHtml(page){

	let html = `<div
			data-testid="comment-composer"
			class="IssueCommentComposer-module__commentComposerWrapper--U1i4y"
			data-inside-side-panel="false"
			id="react-issue-comment-composer"
			>
			<div class="IssueCommentComposer-module__commentComposer--AwVsE">
				<a
					class="IssueCommentComposer-module__avatarLink--T0RGB prc-Link-Link-85e08"
					href="/s-a-ga-r"
					data-hovercard-url="/users/s-a-ga-r/hovercard"
					aria-label="@s-a-ga-r's profile"
					aria-keyshortcuts="Alt+ArrowUp"
					><img
						data-component="Avatar"
						class="Box-sc-62in7e-0 iHEZa-d prc-Avatar-Avatar-ZRS-m"
						alt="s-a-ga-r"
						width="40"
						height="40"
						src="https://avatars.githubusercontent.com/u/82489303?s=64&amp;u=080c759e767f834a21b2d554efd31c3f5a559e33&amp;v=4"
						data-testid="github-avatar"
						style="--avatarSize-regular: 40px"
				/></a>
				<h2
					class="IssueCommentComposer-module__heading--zo78w prc-Heading-Heading-6CmGO"
					data-jump-to-bottom-target="true"
					tabindex="-1"
					id="comment-composer-heading"
				>
					Add a comment
				</h2>
				<div class="IssueCommentComposer-module__commentBoxWrapper--uTEnw">
					<div class="CommentBox-module__commentBoxContainer--yrAth">
						<div
						class="Box-sc-62in7e-0 iJqaqk js-slash-command-surface SlashCommandsProvider-module__slashCommandContainer--ZPT3l"
						>
						<slash-command-expander
							keys="/"
							data-slash-command-url="/s-a-ga-r/Task-Blogging/slash_apps?surface=issue_comment&amp;subject_gid=I_kwDOPGGn6c7Izy8X"
							><fieldset
								aria-disabled="false"
								class="MarkdownEditor-module__fieldSet--QLrYu"
							>
								<div class="MarkdownEditor-module__hidden--tMY1v"></div>
								<legend
									class="Text__StyledText-sc-1klmep6-0 ceMtBK sr-only Label-module__inputLabel--EMji4 InputLabel-module__Text--xY8s7 prc-Text-Text-0ima0"
								>
									new Comment
								</legend>
								<div class="MarkdownEditor-module__container--xSX9w">
									<span class="sr-only" id=":r53:" aria-live="polite"
									>Markdown input: edit mode selected.</span
									><markdown-toolbar
									for=":r54:"
									role="toolbar"
									tabindex="0"
									style="display: none"
									><md-header></md-header><md-bold></md-bold
									><md-italic></md-italic><md-quote></md-quote
									><md-code></md-code><md-link></md-link
									><md-unordered-list></md-unordered-list
									><md-ordered-list></md-ordered-list
									><md-task-list></md-task-list
									><md-mention></md-mention><md-ref></md-ref
									></markdown-toolbar>
									<div
									class="Shared-module__CommentBox--layUN MarkdownEditor-module__inputWrapper--L6JTI"
									>
									<div class="MarkdownEditor-module__header--OuWiJ">
										<div
											class="MarkdownEditor-module__viewSwitchWrapper--oQoLo"
										>
											<div
												class="ViewSwitch-module__viewSwitch--qZjLs"
											>
												<div>
												<nav
													aria-label="View mode"
													class="prc-TabNav-TabNavNav-rTAFO"
												>
													<div
														role="tablist"
														class="prc-TabNav-TabNavTabList-0QtIV"
													>
														<button
															role="tab"
															tabindex="0"
															aria-selected="true"
															class="TabNav-item prc-TabNav-TabNavLink-jXRq9 selected prc-TabNav-Selected-94A5r ViewSwitch-module__tabNavLink--PdqAj ViewSwitch-module__active--kUKgZ"
														>
															Write</button
														><button
															role="tab"
															tabindex="-1"
															class="TabNav-item prc-TabNav-TabNavLink-jXRq9 ViewSwitch-module__tabNavLink--PdqAj"
														>
															Preview
														</button>
													</div>
												</nav>
												</div>
											</div>
											<div
												class="MarkdownEditor-module__viewSwitchBorder--S43Dz"
											></div>
										</div>
										<div
											aria-label="Formatting tools"
											role="toolbar"
											class="Toolbar-module__toolbar--TBvFM"
										>
											<div class="Toolbar-module__group--dOhAD">
												<button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rh1:-loading-announcement"
												aria-labelledby=":rh0:"
												tabindex="0"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-heading"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="M3.75 2a.75.75 0 0 1 .75.75V7h7V2.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-1.5 0V8.5h-7v4.75a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 3.75 2Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rh0:"
												popover="auto"
												>Heading</span
												><button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rh3:-loading-announcement"
												aria-labelledby=":rh2:"
												tabindex="-1"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-bold"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="M4 2h4.5a3.501 3.501 0 0 1 2.852 5.53A3.499 3.499 0 0 1 9.5 14H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm1 7v3h4.5a1.5 1.5 0 0 0 0-3Zm3.5-2a1.5 1.5 0 0 0 0-3H5v3Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rh2:"
												popover="auto"
												>Bold</span
												><button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rh5:-loading-announcement"
												aria-labelledby=":rh4:"
												tabindex="-1"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-italic"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="M6 2.75A.75.75 0 0 1 6.75 2h6.5a.75.75 0 0 1 0 1.5h-2.505l-3.858 9H9.25a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.505l3.858-9H6.75A.75.75 0 0 1 6 2.75Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rh4:"
												popover="auto"
												>Italic</span
												>
												<div
												class="Toolbar-module__divider--Kctb6"
												></div>
											</div>
											<div class="Toolbar-module__group--dOhAD">
												<button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rh7:-loading-announcement"
												aria-labelledby=":rh6:"
												tabindex="-1"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-quote"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="M1.75 2.5h10.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Zm4 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2.5 7.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 1.5 0Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rh6:"
												popover="auto"
												>Quote</span
												><button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rh9:-loading-announcement"
												aria-labelledby=":rh8:"
												tabindex="-1"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-code"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rh8:"
												popover="auto"
												>Code</span
												><button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rhb:-loading-announcement"
												aria-labelledby=":rha:"
												tabindex="-1"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-link"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rha:"
												popover="auto"
												>Link</span
												>
												<div
												class="Toolbar-module__divider--Kctb6"
												></div>
											</div>
											<div class="Toolbar-module__group--dOhAD">
												<button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rhd:-loading-announcement"
												aria-labelledby=":rhc:"
												tabindex="-1"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-list-unordered"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rhc:"
												popover="auto"
												style="top: 950.453px; left: 626.711px"
												>Unordered list</span
												><button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rhf:-loading-announcement"
												aria-labelledby=":rhe:"
												tabindex="-1"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-list-ordered"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="M5 3.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 3.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 8.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM.924 10.32a.5.5 0 0 1-.851-.525l.001-.001.001-.002.002-.004.007-.011c.097-.144.215-.273.348-.384.228-.19.588-.392 1.068-.392.468 0 .858.181 1.126.484.259.294.377.673.377 1.038 0 .987-.686 1.495-1.156 1.845l-.047.035c-.303.225-.522.4-.654.597h1.357a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5c0-1.005.692-1.52 1.167-1.875l.035-.025c.531-.396.8-.625.8-1.078a.57.57 0 0 0-.128-.376C1.806 10.068 1.695 10 1.5 10a.658.658 0 0 0-.429.163.835.835 0 0 0-.144.153ZM2.003 2.5V6h.503a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1h.503V3.308l-.28.14a.5.5 0 0 1-.446-.895l1.003-.5a.5.5 0 0 1 .723.447Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rhe:"
												popover="auto"
												>Numbered list</span
												><button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rhh:-loading-announcement"
												aria-labelledby=":rhg:"
												tabindex="-1"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-tasklist"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="M2 2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm4.655 8.595a.75.75 0 0 1 0 1.06L4.03 14.28a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l.97.97 2.095-2.095a.75.75 0 0 1 1.06 0ZM9.75 2.5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm0 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm0 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm-7.25-9v3h3v-3Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rhg:"
												popover="auto"
												>Task list</span
												>
												<div
												class="Toolbar-module__divider--Kctb6"
												></div>
											</div>
											<div class="Toolbar-module__group--dOhAD">
												<button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rhj:-loading-announcement"
												aria-labelledby=":rhi:"
												tabindex="-1"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-mention"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="M8 .5a7.499 7.499 0 0 1 7.499 7.462l.002.038v1.164a2.612 2.612 0 0 1-4.783 1.454A3.763 3.763 0 0 1 8 11.776 3.776 3.776 0 1 1 11.776 8v1.164a1.112 1.112 0 0 0 2.225 0L14 8a6 6 0 1 0-3.311 5.365.75.75 0 0 1 .673 1.341A7.5 7.5 0 1 1 8 .5Zm0 5.225a2.275 2.275 0 1 0 0 4.552 2.275 2.275 0 0 0 0-4.552Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rhi:"
												popover="auto"
												style="top: 950.453px; left: 756.406px"
												>Mention</span
												><button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rhl:-loading-announcement"
												aria-labelledby=":rhk:"
												tabindex="-1"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-cross-reference"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="M2.75 3.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 13H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 14.543V13H2.75A1.75 1.75 0 0 1 1 11.25v-7.5C1 2.784 1.784 2 2.75 2h5.5a.75.75 0 0 1 0 1.5ZM16 1.25v4.146a.25.25 0 0 1-.427.177L14.03 4.03l-3.75 3.75a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l3.75-3.75-1.543-1.543A.25.25 0 0 1 11.604 1h4.146a.25.25 0 0 1 .25.25Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rhk:"
												popover="auto"
												style="top: 950.453px; left: 783.719px"
												>Reference</span
												>
											</div>
											<button
												data-component="IconButton"
												type="button"
												aria-haspopup="true"
												aria-expanded="false"
												tabindex="-1"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":r5t:-loading-announcement"
												aria-labelledby=":rhm:"
												id=":r5t:"
											>
												<svg
												aria-hidden="true"
												focusable="false"
												class="octicon octicon-reply"
												viewBox="0 0 16 16"
												width="16"
												height="16"
												fill="currentColor"
												display="inline-block"
												overflow="visible"
												style="vertical-align: text-bottom"
												>
												<path
													d="M6.78 1.97a.75.75 0 0 1 0 1.06L3.81 6h6.44A4.75 4.75 0 0 1 15 10.75v2.5a.75.75 0 0 1-1.5 0v-2.5a3.25 3.25 0 0 0-3.25-3.25H3.81l2.97 2.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L1.47 7.28a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
												></path>
												</svg></button
											><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rhm:"
												popover="auto"
												style="top: 950.453px; left: 1150.37px"
												>Saved replies</span
											><button
												data-component="IconButton"
												type="button"
												class="prc-Button-ButtonBase-c50BI ToolbarButton-module__iconButton--o0jFl prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="invisible"
												aria-describedby=":rhp:-loading-announcement"
												aria-labelledby=":rho:"
												tabindex="-1"
											>
												<svg
												aria-hidden="true"
												focusable="false"
												class="octicon octicon-diff-ignored"
												viewBox="0 0 16 16"
												width="16"
												height="16"
												fill="currentColor"
												display="inline-block"
												overflow="visible"
												style="vertical-align: text-bottom"
												>
												<path
													d="M13.25 1c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1ZM2.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Zm8.53 3.28-5.5 5.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l5.5-5.5a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"
												></path>
												</svg></button
											><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rho:"
												popover="auto"
												>Slash commands</span
											>
										</div>
									</div>
									<div
										class="MarkdownInput-module__inputWrapper--fDOeo"
									>
										<div
											class="InlineAutocomplete-module__container--lzMAk"
											style="flex: 1 1 auto"
										>
											<span
												class="MarkdownInput-module__textArea--kLNLR prc-components-TextInputBaseWrapper-ueK9q"
											>
												<textarea
												data-resize="both"
												aria-required="false"
												aria-invalid="false"
												rows="5"
												cols="30"
												class="prc-Textarea-TextArea-13q4j"
												id=":r54:"
												placeholder="Use Markdown to format your comment"
												aria-labelledby="comment-composer-heading"
												aria-describedby=":r53:"
												style="
													min-height: 5lh;
													max-height: 35lh;
													box-sizing: content-box;
													field-sizing: content;
													overflow-wrap: anywhere;
												"
												contenteditable="false"
												></textarea>
											</span>
										</div>
									</div>
									<div role="alert"></div>
									</div>
									<div
									class="Footer-module__footer--rjRmQ"
									data-testid="markdown-editor-footer"
									>
									<div class="Footer-module__footerWrapper--ObMEq">
										<div data-loading-wrapper="true">
											<button
												type="button"
												class="prc-Button-ButtonBase-c50BI Footer-module__footerButton--zxnP6"
												data-loading="false"
												data-size="small"
												data-variant="invisible"
												aria-describedby=":r65:-loading-announcement"
											>
												<span
												data-component="buttonContent"
												data-align="center"
												class="prc-Button-ButtonContent-HKbr-"
												><span
													data-component="leadingVisual"
													class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"
													><svg
														aria-hidden="true"
														focusable="false"
														class="octicon octicon-paperclip"
														viewBox="0 0 16 16"
														width="16"
														height="16"
														fill="currentColor"
														display="inline-block"
														overflow="visible"
														style="vertical-align: text-bottom"
													>
														<path
															d="M12.212 3.02a1.753 1.753 0 0 0-2.478.003l-5.83 5.83a3.007 3.007 0 0 0-.88 2.127c0 .795.315 1.551.88 2.116.567.567 1.333.89 2.126.89.79 0 1.548-.321 2.116-.89l5.48-5.48a.75.75 0 0 1 1.061 1.06l-5.48 5.48a4.492 4.492 0 0 1-3.177 1.33c-1.2 0-2.345-.487-3.187-1.33a4.483 4.483 0 0 1-1.32-3.177c0-1.195.475-2.341 1.32-3.186l5.83-5.83a3.25 3.25 0 0 1 5.553 2.297c0 .863-.343 1.691-.953 2.301L7.439 12.39c-.375.377-.884.59-1.416.593a1.998 1.998 0 0 1-1.412-.593 1.992 1.992 0 0 1 0-2.828l5.48-5.48a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-5.48 5.48a.492.492 0 0 0 0 .707.499.499 0 0 0 .352.154.51.51 0 0 0 .356-.154l5.833-5.827a1.755 1.755 0 0 0 0-2.481Z"
														></path></svg></span
												><span
													data-component="text"
													class="prc-Button-Label-pTQ3x"
													><span
														class="Footer-module__condensed--o9bUn"
														>Add Files</span
													><span
														class="Footer-module__spacious--VlAKA"
														>Paste, drop, or click to add
														files</span
													></span
												></span
												>
											</button>
										</div>
									</div>
									<div class="Footer-module__childrenStyling--cH0iq">
										<div
											class="IssueActions-module__IssueActionsButtonGroup--Usbpc prc-ButtonGroup-ButtonGroup-vcMeG"
										>
											<div>
												<button
												type="button"
												class="prc-Button-ButtonBase-c50BI"
												data-loading="false"
												data-size="medium"
												data-variant="default"
												aria-describedby=":r66:-loading-announcement"
												>
												<span
													data-component="buttonContent"
													data-align="center"
													class="prc-Button-ButtonContent-HKbr-"
													><span
														data-component="leadingVisual"
														class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"
														><svg
															aria-hidden="true"
															focusable="false"
															class="octicon octicon-issue-closed Octicon__StyledOcticon-sc-jtj3m8-0 gGJgxC"
															viewBox="0 0 16 16"
															width="16"
															height="16"
															fill="currentColor"
															display="inline-block"
															overflow="visible"
															style="
															vertical-align: text-bottom;
															"
														>
															<path
															d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"
															></path>
															<path
															d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"
															></path></svg></span
													><span
														data-component="text"
														class="prc-Button-Label-pTQ3x"
														>Close issue</span
													></span
												>
												</button>
											</div>
											<div>
												<button
												data-component="IconButton"
												type="button"
												aria-haspopup="true"
												aria-expanded="false"
												tabindex="0"
												class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="default"
												aria-describedby=":r67:-loading-announcement"
												aria-labelledby=":rhq:"
												id=":r67:"
												>
												<svg
													aria-hidden="true"
													focusable="false"
													class="octicon octicon-triangle-down"
													viewBox="0 0 16 16"
													width="16"
													height="16"
													fill="currentColor"
													display="inline-block"
													overflow="visible"
													style="vertical-align: text-bottom"
												>
													<path
														d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
													></path>
												</svg></button
												><span
												class="prc-TooltipV2-Tooltip-cYMVY"
												data-direction="s"
												aria-hidden="true"
												id=":rhq:"
												popover="auto"
												>More options</span
												>
											</div>
										</div>
										<span
											role="tooltip"
											aria-label="Comment can not be empty"
											id=":rii:"
											data-testid="save-button-tooltip"
											class="prc-Tooltip-Tooltip--1XZX prc-Tooltip-Tooltip--w-c6nR3 tooltipped-w"
											><button
												type="button"
												disabled=""
												class="prc-Button-ButtonBase-c50BI"
												data-loading="false"
												data-no-visuals="true"
												data-size="medium"
												data-variant="primary"
												aria-describedby=":rij:-loading-announcement"
											>
												<span
												data-component="buttonContent"
												data-align="center"
												class="prc-Button-ButtonContent-HKbr-"
												><span
													data-component="text"
													class="prc-Button-Label-pTQ3x"
													>Comment</span
												></span
												>
											</button></span
										>
									</div>
									</div>
								</div>
							</fieldset></slash-command-expander
						>
						</div>
					</div>
				</div>
			</div>
			</div>
		`

	$(page.body).append(html)

}