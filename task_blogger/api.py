# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: MIT. See LICENSE

import frappe
from frappe import _
from datetime import datetime,date,timedelta

from frappe.utils import nowdate


# def create_daily_log():
#     doc = frappe.get_doc({
#         "doctype": "Daily Log",
#         "today": nowdate(),
#         "author": frappe.session.user
#     })
#     doc.insert(ignore_permissions=True)
#     frappe.db.commit()



def create_daily_log():

    if not frappe.db.exists("Task Log", {"today": nowdate()}):
        doc = frappe.get_doc({
            "doctype": "Daily Log",
            "today": nowdate(),
            "author": "Administrator"
        })
        doc.insert(ignore_permissions=True)
        frappe.db.commit()

    frappe.logger().info(">>>> DAILY LOG JOB TRIGGERED")