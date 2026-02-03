frappe.pages['my-drive-v1'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'My Drive V1',
		single_column: true
	});

	render_page(page);
}


function render_page(page){
	const sidebar_button = `<button class="btn-reset sidebar-toggle-btn" aria-label="Toggle Sidebar" data-original-title="" title="">
					<svg class="es-icon icon-md sidebar-toggle-placeholder"><use href="#es-line-align-justify"></use></svg>
					<span class="sidebar-toggle-icon">
						<svg class="es-icon es-line icon-md" style="" aria-hidden="true">
							<use class="" href="#es-line-sidebar-expand"></use>
						</svg>
					</span>
				</button>`

	$(".page-title").prepend(sidebar_button);

	const file_page = `
		
		<div class="col-lg-2 layout-side-section" style="">
			<div class="list-sidebar overlay-sidebar hidden-xs hidden-sm">
				<ul class="list-unstyled sidebar-menu user-actions hide">  
					<li class="divider"></li> </ul> <ul class="list-unstyled sidebar-menu">  
						<div class="sidebar-section views-section hide">   
					<li class="sidebar-label"></li>   
				<div class="current-view">    
					<li class="list-link">
						<a class="btn btn-default btn-sm list-sidebar-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"> 
							<span class="selected-view ellipsis"></span>      
							<span>
								<svg class="icon icon-xs">        
									<use href="#icon-select"></use>
								</svg>      
							</span>
						</a>
						<ul class="dropdown-menu views-dropdown" role="menu"> </ul>    
					</li>    
					<li class="sidebar-action">
						<a class="view-action"></a>    
					</li>  
				</div>	
			</div>   
			<div class="sidebar-section filter-section">   <li class="sidebar-label"> Filter By</li>    
				<div class="list-group-by">
					<div class="list-group-by-fields"><li class="group-by-field list-link">
						<a class="btn btn-default btn-sm list-sidebar-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-label="Assigned To" data-fieldname="assigned_to" data-fieldtype="undefined" href="#" onclick="return false;">
							<span class="ellipsis">Assigned To</span>
							<span><svg class="icon  icon-xs" style="" aria-hidden="true"><use class="" href="#icon-select"></use></svg></span>
						</a>
						<ul class="dropdown-menu group-by-dropdown" role="menu">
						</ul>
					</li>
					<li class="group-by-field list-link">
						<a class="btn btn-default btn-sm list-sidebar-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-label="Created By" data-fieldname="owner" data-fieldtype="undefined" href="#" onclick="return false;">
							<span class="ellipsis">Created By</span>
							<span>
								<svg class="icon  icon-xs" style="" aria-hidden="true">
									<use class="" href="#icon-select"></use>
								</svg>
							</span>
						</a>
						<ul class="dropdown-menu group-by-dropdown" role="menu"></ul>
					</li>
				</div>
				<li class="add-list-group-by sidebar-action">
					<a class="add-group-by">
						Edit Filters
					</a>
				</li>
				</div>    <div class="list-tags">    <li class="list-stats list-link">     <a class="btn btn-default btn-sm list-sidebar-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">      <span>Tags</span>      <span>       <svg class="icon icon-xs">        <use href="#icon-select"></use>       </svg>      </span>     </a>     <ul class="dropdown-menu list-stats-dropdown" role="menu">      <div class="dropdown-search">       <input type="text" placeholder="Search" data-element="search" class="form-control input-xs">      </div>      <div class="stat-result">      </div>     </ul>    </li>    <li class="sidebar-action show-tags">     <a class="list-tag-preview">Show Tags</a>    </li>   </div>  </div>   <div class="sidebar-section save-filter-section">   <li class="sidebar-label">    Save Filter   </li>   <li class="list-filters list-link">
					<li class="input-area"><div class="frappe-control input-max-width" data-fieldtype="Data">
						<div class="form-group">
							<div class="clearfix">
								<label class="control-label" style="padding-right: 0px;"></label>
								<span class="help"></span>
							</div>
							<div class="control-input-wrapper">
								<div class="control-input"><input type="text" autocomplete="off" class="input-with-feedback form-control input-xs" maxlength="140" data-fieldtype="Data" placeholder="Filter Name"></div>
								<div class="control-value like-disabled-input" style="display: none;"></div>
								<p class="help-box small text-muted"></p>
							</div>
						</div>
					<span class="tooltip-content">undefined</span></div><div class="form-group frappe-control input-max-width hide-control" data-fieldtype="Check">
					<div class="checkbox">
						<label>
							<span class="input-area"><input type="checkbox" autocomplete="off" class="input-with-feedback" data-fieldtype="Check" placeholder=""></span>
							<span class="disp-area" style="display: none;"><input type="checkbox" disabled="" class="disabled-deselected"></span>
							<span class="label-area">Is Global</span>
							<span class="ml-1 help"></span>
						</label>
						<p class="help-box small text-muted"></p>
					</div>
				<span class="tooltip-content">undefined</span></div></li>
					<li class="sidebar-action">
						<a class="saved-filters-preview" style="display: none;">Hide Saved</a>
					</li>
					<div class="saved-filters" style=""></div>
				</li> 
				</div>
				</ul> 
			</div>
		</div>






		<div class="col layout-main-section-wrapper file-view">
			<div class="layout-main-section frappe-card">
				<div class="page-form flex">
					<div class="standard-filter-section flex">
						<div class="form-group frappe-control input-max-width col-md-2" data-fieldtype="Data" data-fieldname="name" title="" data-original-title="ID">
							<input type="text" autocomplete="off" class="input-with-feedback form-control input-xs" maxlength="140" data-fieldtype="Data" data-fieldname="name" placeholder="ID" /><span class="tooltip-content">name</span>
						</div>
						<div class="form-group frappe-control input-max-width col-md-2" data-fieldtype="Data" data-fieldname="file_name" title="" data-original-title="File Name">
							<input type="text" autocomplete="off" class="input-with-feedback form-control input-xs" maxlength="140" data-fieldtype="Data" data-fieldname="file_name" placeholder="File Name" />
							<span class="tooltip-content">file_name</span>
						</div>
						<div class="form-group frappe-control input-max-width col-md-2" data-fieldtype="Data" data-fieldname="file_type" title="" data-original-title="File Type">
							<input type="text" autocomplete="off" class="input-with-feedback form-control input-xs" maxlength="140" data-fieldtype="Data" data-fieldname="file_type" placeholder="File Type" />
							<span class="tooltip-content">file_type</span>
						</div>
						<div class="form-group frappe-control input-max-width col-md-2" data-fieldtype="Link" data-fieldname="attached_to_doctype" title="" data-original-title="Attached To DocType">
							<div class="link-field ui-front" style="position: relative;">
								<div class="awesomplete">
									<input
										type="text"
										class="input-with-feedback form-control input-xs"
										maxlength="140"
										data-fieldtype="Link"
										data-fieldname="attached_to_doctype"
										placeholder="Attached To DocType"
										data-target="DocType"
										autocomplete="off"
										aria-expanded="false"
										aria-owns="awesomplete_list_2"
										role="combobox"
									/>
									<ul hidden="" role="listbox" id="awesomplete_list_2"></ul>
									<span class="visually-hidden" role="status" aria-live="assertive" aria-atomic="true">Begin typing for results.</span>
								</div>
							</div>
							<span class="tooltip-content">attached_to_doctype</span>
						</div>
					</div>
					<div class="filter-section flex">
						<div class="filter-selector">
							<div class="btn-group">
								<button class="btn btn-sm filter-button btn-primary-light" data-original-title="" title="1 Filter Applied">
									<span class="filter-icon active">
										<svg class="es-icon es-line icon-sm" style="" aria-hidden="true">
											<use class="" href="#es-line-filter"></use>
										</svg>
									</span>
									<span class="button-label hidden-xs">Filters <span class="filter-label">1</span></span>
								</button>
								<button class="btn btn-default btn-sm filter-x-button" title="Clear all filters">
									<span class="filter-icon">
										<svg class="es-icon es-line icon-sm" style="" aria-hidden="true">
											<use class="" href="#es-small-close"></use>
										</svg>
									</span>
								</button>
							</div>
						</div>
						<div class="sort-selector">
							<div class="btn-group">
								<button class="btn btn-default btn-sm btn-order" data-value="desc" title="descending">
									<span class="sort-order">
										<svg class="icon icon-sm"><use href="#icon-sort-descending"></use></svg>
									</span>
								</button>
								<button type="button" class="btn btn-default btn-sm sort-selector-button" data-toggle="dropdown">
									<span class="dropdown-text">Last Updated On</span>
									<ul class="dropdown-menu dropdown-menu-right">
										<li><a class="dropdown-item option" data-value="modified"> Last Updated On </a></li>
										<li><a class="dropdown-item option" data-value="file_name"> File Name </a></li>
										<li><a class="dropdown-item option" data-value="name"> ID </a></li>
										<li><a class="dropdown-item option" data-value="creation"> Created On </a></li>
										<li><a class="dropdown-item option" data-value="idx"> Most Used </a></li>
										<li><a class="dropdown-item option" data-value="file_type"> File Type </a></li>
										<li><a class="dropdown-item option" data-value="file_size"> File Size </a></li>
									</ul>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="frappe-list">
					<div class="result file-grid-view">
						<header class="level list-row-head text-muted">
							<div class="level-left list-header-subject">
								<div class="list-row-col list-subject level">
									<span class="level-item"></span>
								</div>
							</div>
							<div class="level-left checkbox-actions">
								<div class="level list-subject">
									<input class="level-item list-check-all" type="checkbox" title="Select All" />
									<span class="level-item list-header-meta"></span>
								</div>
							</div>
							<div class="level-right">
								<span class="list-count"></span>
							</div>
						</header>
						<div class="file-grid">
							<a href="/app/List/File/Home/Attachments" draggable="true" class="file-wrapper ellipsis" data-name="Home/Attachments">
								<div class="file-header">
									<input class="level-item list-row-checkbox hidden-xs" type="checkbox" data-name="Home/Attachments" />
								</div>
								<div class="file-body">
									<svg class="icon" style="width: 40px; height: 45px;" aria-hidden="true">
										<use class="" href="#icon-folder-normal-large"></use>
									</svg>
								</div>
								<div class="file-footer">
									<div class="file-title ellipsis">Attachments</div>
									<div class="file-creation">09-08-2025</div>
								</div>
							</a>

							<a href="/app/file/5fc9e3729e" draggable="true" class="file-wrapper ellipsis" data-name="5fc9e3729e">
								<div class="file-header">
									<input class="level-item list-row-checkbox hidden-xs" type="checkbox" data-name="5fc9e3729e" />
								</div>
								<div class="file-body">
									<div class="file-image"><img src="/private/files/tweet_fav.png" alt="tweet_fav.png" /></div>
								</div>
								<div class="file-footer">
									<div class="file-title ellipsis">tweet_fav.png</div>
									<div class="file-creation">10-08-2025</div>
								</div>
							</a>

							<a href="/app/file/acc9b8392f" draggable="true" class="file-wrapper ellipsis" data-name="acc9b8392f">
								<div class="file-header">
									<input class="level-item list-row-checkbox hidden-xs" type="checkbox" data-name="acc9b8392f" />
								</div>
								<div class="file-body">
									<div class="file-image"><img src="/private/files/Twitter-Logosu.png" alt="Twitter-Logosu.png" /></div>
								</div>
								<div class="file-footer">
									<div class="file-title ellipsis">Twitter-Logosu.png</div>
									<div class="file-creation">10-08-2025</div>
								</div>
							</a>

							<a href="/app/file/4f9d951d0b" draggable="true" class="file-wrapper ellipsis" data-name="4f9d951d0b">
								<div class="file-header">
									<input class="level-item list-row-checkbox hidden-xs" type="checkbox" data-name="4f9d951d0b" />
								</div>
								<div class="file-body">
									<div class="file-image"><img src="/private/files/Twitter-Logosu.png" alt="Twitter-Logosu.png" /></div>
								</div>
								<div class="file-footer">
									<div class="file-title ellipsis">Twitter-Logosu.png</div>
									<div class="file-creation">10-08-2025</div>
								</div>
							</a>

							<a href="/app/file/c1bd928047" draggable="true" class="file-wrapper ellipsis" data-name="c1bd928047">
								<div class="file-header">
									<input class="level-item list-row-checkbox hidden-xs" type="checkbox" data-name="c1bd928047" />
								</div>
								<div class="file-body">
									<div class="file-image"><img src="/private/files/Twitter-Logosu.png" alt="Twitter-Logosu.png" /></div>
								</div>
								<div class="file-footer">
									<div class="file-title ellipsis">Twitter-Logosu.png</div>
									<div class="file-creation">10-08-2025</div>
								</div>
							</a>

							<a href="/app/file/d8428655bc" draggable="true" class="file-wrapper ellipsis" data-name="d8428655bc">
								<div class="file-header">
									<input class="level-item list-row-checkbox hidden-xs" type="checkbox" data-name="d8428655bc" />
								</div>
								<div class="file-body">
									<div class="file-image"><img src="/private/files/Twitter-Logosu.png" alt="Twitter-Logosu.png" /></div>
								</div>
								<div class="file-footer">
									<div class="file-title ellipsis">Twitter-Logosu.png</div>
									<div class="file-creation">10-08-2025</div>
								</div>
							</a>

							<a href="/app/file/3b9360ce4e" draggable="true" class="file-wrapper ellipsis" data-name="3b9360ce4e">
								<div class="file-header">
									<input class="level-item list-row-checkbox hidden-xs" type="checkbox" data-name="3b9360ce4e" />
								</div>
								<div class="file-body">
									<div class="file-image"><img src="/private/files/Twitter-Logosu.png" alt="Twitter-Logosu.png" /></div>
								</div>
								<div class="file-footer">
									<div class="file-title ellipsis">Twitter-Logosu.png</div>
									<div class="file-creation">10-08-2025</div>
								</div>
							</a>
						</div>
					</div>
					<div class="no-result" style="display: none;">
						<div class="breadcrumbs"></div>
						<div class="text-muted flex justify-center align-center">
							<div class="msg-box no-border">
								<div>
									<img src="/assets/frappe/images/ui-states/list-empty-state.svg" alt="Generic Empty State" class="null-state" />
								</div>
								<p>No File found with matching filters. Clear filters to see all File.</p>
								<p>
									<button class="btn btn-default btn-sm btn-new-doc hidden-xs">
										Create a new File
									</button>
									<button class="btn btn-primary btn-new-doc visible-xs">
										Create New
									</button>
								</p>
							</div>
						</div>
					</div>
					<div class="list-paging-area level" style="">
						<div class="level-left">
							<div class="btn-group">
								<button type="button" class="btn btn-default btn-sm btn-paging btn-info" data-value="20">
									20
								</button>

								<button type="button" class="btn btn-default btn-sm btn-paging" data-value="100">
									100
								</button>

								<button type="button" class="btn btn-default btn-sm btn-paging" data-value="500">
									500
								</button>

								<button type="button" class="btn btn-default btn-sm btn-paging" data-value="2500">
									2500
								</button>
							</div>
						</div>
						<div class="level-right">
							<button class="btn btn-default btn-more btn-sm" style="display: none;">
								Load More
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="layout-footer hide"></div>
		</div>`
	$(".layout-main").html(file_page);

	
	$(document).on("click", ".sidebar-toggle-btn", function () {
		let sidebar = $(".layout-side-section");
		if (sidebar.is(":visible")) {
			sidebar.hide();
			innerSidebar.removeClass("opened");
		} else {
			sidebar.show();
			innerSidebar.addClass("opened");
		}
	});

	// Auto toggle by mouse movement
	$(".file-view").on("mouseleave", function (e) {
		// If cursor exits left side
		if (e.pageX <= $(".file-view").offset().left) {
			$(".layout-side-section").show();
			$(".list-sidebar").addClass("opened");
		}
	});

	$(".file-view").on("mouseenter", function () {
		$(".layout-side-section").hide();
		$(".list-sidebar").removeClass("opened");
	});
}