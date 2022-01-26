def accum(s):
    # Creates an empty word variable
    word = ''
    for x,y in enumerate(s):
        # Runs a loop to get the index and value of word
        if x ==0:
            word += y.upper()
            # If its the first character, it should just add it to the word variable
        else:
            sm = y*(x+1)
            word+=f"-{sm}".title()
            # It gets the character and creates more of it depending on the index. then uses title method to make the first character uppercase
    return(word)
