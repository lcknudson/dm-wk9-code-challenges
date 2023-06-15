# Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

# Example:

# createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
# The returned format must be correct in order to complete this challenge.

# Don’t forget the space after the closing parentheses!

number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

def createPhoneNumber(numbers):
    # convert the list of numbers to a string
    phone_numbers = ''.join(str(num) for num in numbers)
    # print(phone_numbers) #Check if it worked

    formatted_phone = f"({phone_numbers[0:3]}) {phone_numbers[3:6]}-{phone_numbers[6:]}"
    print(formatted_phone)

    

createPhoneNumber(number_array)