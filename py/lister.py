import os

classes = ""

with open(os.path.dirname(os.path.abspath(__file__)) + "\list_to_convert.txt", encoding="utf-8") as f:
    strings = f.readlines()

array = ["<li>"+string.strip()+"</li>"
         if classes == ""
         else "<li class=\"" + classes + "\">" + string.strip() + "</li>"
         for string in strings
         ]

print()
for a in array:
    print(a)
print()
