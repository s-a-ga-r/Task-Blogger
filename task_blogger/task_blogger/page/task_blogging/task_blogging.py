import frappe
import json


@frappe.whitelist()
def new_project(user,newproject):
    newproject = frappe.parse_json(newproject)
    # frappe.msgprint(str(newproject.get("status").capitalize()))
    doc = frappe.new_doc('Projects')
    doc.project_name = newproject.get('title')
    doc.category = newproject.get('category').capitalize()
    doc.start_date = newproject.get('startTime')
    doc.end_date = newproject.get('endTime')
    doc.status = newproject.get('status').capitalize()
    doc.priority_level = newproject.get('priority').capitalize()
    doc.description = newproject.get('description')
    doc.user = user
    doc.insert()

    return {"status":"Success"}
