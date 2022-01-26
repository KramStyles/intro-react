def unique_in_order(iterable):
    """
    This function takes as argument a sequence and returns a
    list of items without any elements with the same value next to
     each other and preserving the original order of elements.
    :param iterable: List of argument
    :return: list of argument without the same value next to themselves
    """
    newArray = []
    for x, y in enumerate(iterable):
        if x > 0:
            if iterable[x-1] != y:
                newArray.append(y)
        else:
            newArray.append(y)
    return(newArray)