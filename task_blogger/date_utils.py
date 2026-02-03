# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: MIT. See LICENSE

import frappe
from frappe import _
from datetime import datetime,date,timedelta




''' 
    
    "15-12-2025"  to  "2025-12-15"

'''

def format_date(dateStr):
    if isinstance(dateStr, str):
        dt = datetime.strptime(dateStr, "%d-%m-%Y")
        dateStr = dt.strftime("%Y-%m-%d")
        return dateStr
    else:
        return dateStr
    



'''
    check date formate is liek "2023-10-25" or "2023-1-5"
    if month or date is single digit then add 0 before it.
'''
def format_date2(effective_date):
    if isinstance(effective_date, str):
        return  datetime.strptime(effective_date, '%Y-%m-%d').date()
    else:
        return effective_date
    
# Returns "2022"
def get_year(dateStr):
    dateObj = datetime.strptime(dateStr, "%Y-%m-%d")
    year = dateObj.strftime("%Y")
    return year

#Pending 04 it'll get 4 need to convert into 04 
def get_month(dateStr):
    date_object = datetime.strptime(dateStr, "%Y-%m-%d")
    month = date_object.month

    return month

# (2022,04)
def get_month_year(dateStr):
    date_object = datetime.strptime(dateStr, "%Y-%m-%d")
    year, month = date_object.year, date_object.month
    return (year, month)

# Jan
def get_Jan(dateStr):
    date_obj = datetime.strptime(dateStr, "%d-%m-%Y")
    year = date_obj.strftime("%Y")  # Returns "2024"
    return year


# Returns '2024-2025'
def get_financial_year(date: datetime.date, start_month: int = 4) -> str:
    """
    Returns financial year string like '2024-2025'
    :param date: datetime.date object
    :param start_month: financial year start month (default = 4 for April)
    """
    year = date.year
    if date.month < start_month:
        start_year = year - 1
        end_year = year
    else:
        start_year = year
        end_year = year + 1
    return f"{start_year}-{end_year}"


# returns 2025-04-01
def get_fiscal_startdate(dateStr,start_month=4):
    date_obj=format_date(dateStr)
    current_month = date_obj.month
    current_year = date_obj.year
    if current_month < start_month:
        # Before fiscal year start month - return previous year's fiscal start date
        fiscal_year = current_year - 1
    else:
        # On or after fiscal year start month - return current year's fiscal start date
        fiscal_year = current_year
    # Create fiscal start date (April 1st for start_month=4)
    fiscal_date = date(fiscal_year, start_month, 1)
    return fiscal_date.strftime('%Y-%m-%d')


# returns 2026-03-31
def get_fiscal_enddate(dateStr, start_month=4):
    date_obj=format_date(dateStr)
    current_month = date_obj.month
    current_year = date_obj.year
    
    if current_month >= start_month:
        financial_year_end_year = current_year + 1
    else:
        financial_year_end_year = current_year
    
    end_month = start_month - 1
    if end_month == 0:
        end_month = 12
        financial_year_end_year -= 1
    end_date = date(financial_year_end_year, end_month, 31)
    return end_date.strftime('%Y-%m-%d')

# 2025-01-01  # 2025-12-31  year = 2025 or "2025"
def get_year_dates(year):
    try:
        if isinstance(year, str):
            if not year.isdigit():
                frappe.throw("Year must be a valid number (e.g. 2025).")
            year = int(year)
        elif not isinstance(year, int):
            frappe.throw("Year must be an integer or a string of digits (e.g. 2025).")
    except Exception as e:
        frappe.throw(f"Error while calculating year dates: {str(e)}")


    # current_year = 2025
    start_year_date = date(year, 1, 1)   # 2025-01-01
    end_year_date   = date(year, 12, 31) # 2025-12-31

    return start_year_date, end_year_date

    print(start_year_date, end_year_date)






# Today at 10:11 am

def creation(login_time):
    now = datetime.now()
    login_date = login_time.date()
    today = now.date()
    yesterday = today - timedelta(days=1)
    time_str = login_time.strftime("%-I:%M %p").lower()  # Use "%#I" on Windows
    if login_date == today:
        return f"Today at {time_str}"
    elif login_date == yesterday:
        return f"Yesterday at {time_str}"
    else:
        date_str = login_time.strftime("%b %d, %Y")
        return f"{date_str}, {time_str}"
    

