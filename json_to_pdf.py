from fpdf import FPDF
import numpy
import json
   
# save FPDF() class into 
# a variable pdf
pdf = FPDF()   
pdf.set_auto_page_break(0)
   
# Add a page
pdf.add_page()
   
# set style and size of font 
# that you want in the pdf
pdf.set_font("Arial", size = 12)

# open the text file in read mode
f = open("out.json", "r", encoding='latin')
mylist = list(f)
# insert the texts in pdf
for x in mylist:
    pdf.cell(200, 10, txt = x, ln = 1, align = 'C')
   
# save the pdf with name .pdf
pdf.output("final.pdf")   