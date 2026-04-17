# Copyright (c) 2025, Sagar Patil and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

# from frappe.utils import utils

from frappe import utils



class TaskLog(Document):

	def before_save(self):
		self.today = utils.today()
		self.author = frappe.session.user
