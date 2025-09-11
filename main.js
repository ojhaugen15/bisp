console.log('TESTING')
current_depth = 0

function transpileIsp (programText, currentIndex, currentOutput) {
 searchIndex = 0
 programSize = getValue(programText, 'length')
 outputText = ''
 if (arentSame(currentIndex, undefined)) {
  searchIndex = currentIndex
  outputText = currentOutput
 }
 currentBlock = ''
 countLines = 0
 blockSize = 50
 while (firstGreater(programSize, searchIndex)) {
  currentCharacter = getValue(programText, searchIndex)
  currentBlock = concatenateStrings(currentBlock, currentCharacter)
  if (areSame(currentCharacter, '\n')) {
   countLines = addNumbers(countLines, 1)
   if (areSame(blockSize, countLines)) {
    transpiledBlock = transpileBlock(currentBlock)
    outputText = concatenateStrings(outputText, transpiledBlock)
    currentIndex = addNumbers(searchIndex, 1)
    transpiledText = transpileIsp(programText, currentIndex, outputText)
    return transpiledText
   }
  }
  searchIndex = addNumbers(searchIndex, 1)
 }
 if (firstGreater(countLines, 0)) {
  transpiledBlock = transpileBlock(currentBlock)
  outputText = concatenateStrings(outputText, transpiledBlock)
 }
 transpiledProgram = concatenateStrings(outputText, utility_functions)
 return transpiledProgram
}

function transpileBlock (programText, currentIndex, currentOutput) {
 searchIndex = 0
 programSize = getValue(programText, 'length')
 currentLine = ''
 outputText = ''
 if (arentSame(undefined, currentIndex)) {
  searchIndex = currentIndex
  outputText = currentOutput
 }
 while (firstGreater(programSize, searchIndex)) {
  currentCharacter = getValue(programText, searchIndex)
  if (areSame(currentCharacter, '\n')) {
   transpiledLine = transpileLine(currentLine)
   outputText = concatenateStrings(outputText, transpiledLine)
   outputText = concatenateStrings(outputText, '\n')
   currentIndex = addNumbers(searchIndex, 1)
   transpiledBlock = transpileBlock(programText, currentIndex, outputText)
   return transpiledBlock
  }
  currentLine = concatenateStrings(currentLine, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
 return outputText
}

function getDepth (lineIsp) {
 searchIndex = 0
 lineSize = getValue(lineIsp, 'length')
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  if (arentSame(currentCharacter, ':')) {
   numberColons = searchIndex
   return numberColons
  }
  searchIndex = addNumbers(searchIndex, 1)
 }
 return 0
}

function transpileLine (lineIsp) {
 newDepth = getDepth(lineIsp)
 if (areSame(newDepth, 0)) {
  if (emptyLine(lineIsp)) {
   current_depth = 0
   transpiledLine = ''
   return transpiledLine
  }
 }
 if (areSame(current_depth, 0)) {
  if (areSame(newDepth, 1)) {
   transpiledLine = transpileDeclaration(lineIsp)
   current_depth = 1
   return transpiledLine
  }
 }
 secondCharacter = getValue(lineIsp, 1)
 if (arentSame(secondCharacter, ' ')) {
  lineIsp = removeDepth(lineIsp, newDepth)
  lineIsp = transpileNested(lineIsp)
  transpiledLine = transpileNonatomic(lineIsp)
  transpiledLine = addSpaces(lineIsp, newDepth)
  current_depth = newDepth
  endBrackets = bracketPrefix(newDepth)
  transpiledLine = concatenateStrings(endBrackets, transpiledLine)
  return transpiledLine
 }
 atomicFunction = getValue(lineIsp, 0)
 if (areSame(atomicFunction, 'a')) {
  lineIsp = removeDepth(lineIsp, newDepth)
  lineIsp = transpileNested(lineIsp)
  transpiledLine = transpileA(lineIsp)
  transpiledLine = addSpaces(lineIsp, newDepth)
  current_depth = newDepth
  endBrackets = bracketPrefix(newDepth)
  transpiledLine = concatenateStrings(endBrackets, transpiledLine)
  return transpiledLine
 }
 if (areSame(atomicFunction, 'e')) {
  lineIsp = removeDepth(lineIsp, newDepth)
  lineIsp = transpileNested(lineIsp)
  transpiledLine = transpileE(lineIsp)
  transpiledLine = addSpaces(lineIsp, newDepth)
  current_depth = newDepth
  endBrackets = bracketPrefix(newDepth)
  transpiledLine = concatenateStrings(endBrackets, transpiledLine)
  return transpiledLine
 }
 if (areSame(atomicFunction, 'i')) {
  lineIsp = removeDepth(lineIsp, newDepth)
  lineIsp = transpileNested(lineIsp)
  transpiledLine = transpileI(lineIsp)
  transpiledLine = addSpaces(lineIsp, newDepth)
  current_depth = newDepth
  endBrackets = bracketPrefix(newDepth)
  transpiledLine = concatenateStrings(endBrackets, transpiledLine)
  return transpiledLine
 }
 if (areSame(atomicFunction, 'o')) {
  lineIsp = removeDepth(lineIsp, newDepth)
  lineIsp = transpileNested(lineIsp)
  transpiledLine = transpileO(lineIsp)
  transpiledLine = addSpaces(lineIsp, newDepth)
  current_depth = newDepth
  endBrackets = bracketPrefix(newDepth)
  transpiledLine = concatenateStrings(endBrackets, transpiledLine)
  return transpiledLine
 }
 if (areSame(atomicFunction, 'u')) {
  lineIsp = removeDepth(lineIsp, newDepth)
  lineIsp = transpileNested(lineIsp)
  transpiledLine = transpileU(lineIsp)
  transpiledLine = addSpaces(lineIsp, newDepth)
  current_depth = newDepth
  endBrackets = bracketPrefix(newDepth)
  transpiledLine = concatenateStrings(endBrackets, transpiledLine)
  return transpiledLine
 }
 if (areSame(atomicFunction, 'y')) {
  lineIsp = removeDepth(lineIsp, newDepth)
  lineIsp = transpileNested(lineIsp)
  transpiledLine = transpileY(lineIsp)
  transpiledLine = addSpaces(lineIsp, newDepth)
  current_depth = newDepth
  endBrackets = bracketPrefix(newDepth)
  transpiledLine = concatenateStrings(endBrackets, transpiledLine)
  return transpiledLine
 }
 return ''
}

function transpileNonatomic (lineIsp, currentIndex, currentOutput) {
 foundFirst = false
 searchIndex = 0
 outputString = ''
 if (arentSame(currentIndex, undefined)) {
  searchIndex = currentIndex
  outputString = currentOutput
  foundFirst = true
 }
 lineSize = getValue(lineIsp, 'length')
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  if (areSame(currentCharacter, ' ')) {
   currentIndex = addNumbers(searchIndex, 1)
   if (areSame(currentIndex, searchIndex)) {
    outputString = concatenateStrings(outputString, ')')
    return outputString
   }
   previousIndex = differenceNumbers(searchIndex, 1)
   previousCharacter = getValue(lineIsp, previousIndex)
   if (arentSame(previousCharacter, ',')) {
    if (areSame(foundFirst, false)) {
     foundFirst = true
     outputString = concatenateStrings(outputString, '(')
     transpiledLine = transpileNonatomic(lineIsp, currentIndex, outputString)
     return transpiledLine
    }
    outputString = concatenateStrings(outputString, ', ')
   }
   transpiledLine = transpileNonatomic(lineIsp, currentIndex, outputString)
   return transpiledLine
  }
  searchIndex = addNumbers(searchIndex, 1)
 }
 outputString = concatenateStrings(outputString, ')')
 return outputString
}

function transpileA (lineIsp) {
 searchIndex = 2
 lineSize = getValue(lineIsp, 'length')
 outputString = ''
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  outputString = concatenateStrings(outputString, currentCharacter)
  if (areSame(currentCharacter, ' ')) {
   previousIndex = differenceNumbers(searchIndex, 1)
   previousCharacter = getValue(lineIsp, previousIndex)
   if (arentSame(previousCharacter, ',')) {
    outputString = concatenateStrings(outputString, '= ')
    while (firstGreater(lineSize, searchIndex)) {
     currentCharacter = getValue(lineIsp, searchIndex)
     outputString = concatenateStrings(outputString, currentCharacter)     
     searchIndex = addNumbers(searchIndex, 1)
    }
    return outputString
   }
  }
  searchIndex = addNumbers(searchIndex, 1)
 }
}

function transpileE (lineIsp) {
 lineSize = getValue(lineIsp, 'length')
 outputString = 'return'
 if (firstGreater(3, lineSize)) {
  return outputString
 }
 outputString = concatenateStrings(outputString, ' ')
 searchIndex = 2
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  outputString = concatenateStrings(outputString, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
 return outputString
}

function transpileI (lineIsp) {
 outputString = 'while ('
 outputClose = ') {'
 searchIndex = 2
 lineSize = getValue(lineIsp, 'length')
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  outputString = concatenateStrings(outputString, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
 outputString = concatenateStrings(outputString, outputClose)
 return outputString
}

function transpileDeclaration (lineIsp, currentIndex, currentOutput) {
 outputString = 'function '
 searchIndex = 1
 lineSize = getValue(lineIsp, 'length')
 currentString = ''
 foundFirst = false
 if (arentSame(currentIndex, undefined)) {
  searchIndex = currentIndex
  foundFirst = true
  outputString = currentOutput
 }
 outputClose = ') {'
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  if (areSame(currentCharacter, ' ')) {
   if (areSame(foundFirst, false)) {
    foundFirst = true
    outputString = concatenateStrings(outputString, currentString)
    outputString = concatenateStrings(outputString, ' (')
   }
   outputString = concatenateStrings(outputString, currentString)
   outputString = concatenateStrings(outputString, ', ')
   currentIndex = addNumbers(searchIndex, 1)
   transpiledLine = transpileDeclaration(lineIsp, currentIndex, outputString)
   return transpiledLine
  }
  currentString = concatenateStrings(currentString, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
 if (areSame(foundFirst, false)) {
  outputString = concatenateStrings(outputString, currentString)
  outputString = concatenateStrings(outputString, ' () {')
  return outputString
 }
 outputString = concatenateStrings(outputString, currentString)
 outputString = concatenateStrings(outputString, ') {')
 return outputString    
}

function removeDepth (lineIsp, numberColons) {
 outputString = ''
 searchIndex = numberColons
 lineSize = getValue(lineIsp, 'length')
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  outputString = concatenateStrings(outputString, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
 return outputString
}

function addSpaces (lineIsp, lineDepth) {
 searchIndex = 0
 prefixString = ''
 while (firstGreater(lineDepth, searchIndex)) {
  prefixString = concatenateStrings(prefixString, ' ')
  searchIndex = addNumbers(searchIndex, 1)
 }
 outputString = concatenateStrings(prefixString, lineIsp)
 return outputString  
}

function transpileNested (lineIsp) {
 searchIndex = 0
 lineSize = getValue(lineIsp, 'length')
 outputString = ''
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  if (areSame(currentCharacter, ':')) {
   nestDepth = 1
   nestedLine = ''
   search2 = addNumbers(searchIndex, 1)
   while (firstGreater(lineSize, search2)) {
    currentCharacter = getValue(lineIsp, search2)
    if (areSame(currentCharacter, ':')) {
     nestDepth = addNumbers(nestDepth, 1)
    }
    if (areSame(currentCharacter, ';')) {
     nestDepth = differenceNumbers(nestDepth, 1)
     if (areSame(nestDepth, 0)) {
      transpiledSubline = transpileLine(nestedLine)
      outputString = concatenateStrings(outputString, transpiledSubline)
      lastIndex = search2
      search2 = lineSize
     }
    }
    nestedLine = concatenateStrings(nestedLine, currentCharacter)
    search2 = addNumbers(search2, 1)
   }
   searchIndex = addNumbers(lastIndex, 1)
   if (areSame(searchIndex, lineSize)) {
    return outputString
   }
   currentCharacter = getValue(lineIsp, searchIndex)            
  }  
  outputString = concatenateStrings(outputString, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
 return outputString
}

function emptyLine (lineIsp) {
 lineSize = getValue(lineIsp, 'length')
 if (areSame(lineSize, 0)) {
  return true
 }
 searchIndex = 0
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  if (arentSame(currentCharacter, ' ')) {
   return false
  }
  searchIndex = addNumbers(searchIndex, 1)
 }
 return true
}

function bracketPrefix (lineDepth) {
 outputString = ''
 lineDifference = differenceNumbers(current_depth, lineDepth)
 if (arentSame(firstGreater(lineDifference, 0), true)) {
  return ''
 }
 baseDifference = differenceNumbers(lineDifference, 1)
 searchIndex = 0
 bracketString = '}'
 while (firstGreater(lineDifference, searchIndex)) {
  numberSpaces = addNumbers(current_depth, baseDifference)
  baseDifference = differenceNumbers(baseDifference, 1)
  bracketString = addSpaces(bracketString, numberSpaces)
  outputString = concatenateStrings(outputString, bracketString)
  outputString = concatenateStrings(outputString, '\n')       
  searchIndex = addNumbers(searchIndex, 1)
 }
 return outputString
}

function transpileO (lineIsp) {
 firstTerm = ''
 secondTerm = ''
 searchIndex = 2
 lineSize = getValue(lineIsp, 'length')
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  if (areSame(currentCharacter, ' ')) {
   previousIndex = differenceNumbers(searchIndex, 1)
   previousCharacter = getValue(lineIsp, previousIndex)
   if (arentSame(previousCharacter, ',')) {
    searchIndex = addNumbers(searchIndex, 1)
    while (firstGreater(lineSize, searchIndex)) {
     currentCharacter = getValue(lineIsp, searchIndex)
     secondTerm = concatenateStrings(secondTerm, currentCharacter)
     searchIndex = addNumbers(searchIndex, 1)
    }
    outputString = concatenateStrings(firstTerm, ' = concatenateStrings(')
    outputString = concatenateStrings(outputString,  firstTerm)
    outputString = concatenateStrings(outputString, ', ')
    outputString = concatenateStrings(outputString, secondTerm)
    outputString = concatenateStrings(outputString, ')')
    return outputString
   }
  }
  firstTerm = concatenateStrings(firstTerm, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
 outputString = firstTerm
 return outputString
}

function transpileU (lineIsp) {
 stringName = ''
 searchIndex = 2
 lineSize = getValue(lineIsp, 'length')
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  stringName = concatenateStrings(stringName, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
 outputString = concatenateStrings('getValue(', stringName)
 outputString = concatenateStrings(outputString, ', 0)')
 return outputString
}

function transpileY (lineIsp) {
 searchIndex = 2
 lineSize = getValue(lineIsp, 'length')
 firstTerm = ''
 while (firstGreater(lineSize, searchIndex)) {
  currentCharacter = getValue(lineIsp, searchIndex)
  if (areSame(currentCharacter, ' ')) {
   previousIndex = differenceNumbers(searchIndex, ' ')
   previousCharacter = getValue(lineIsp, previousIndex)
   if (arentSame(previousCharacter, ',')) {
    secondTerm = ''
    searchIndex = addNumbers(searchIndex, 1)
    while (firstGreater(lineSize, searchIndex)) {
     currentCharacter = getValue(lineIsp, searchIndex)
     if (areSame(' ', currentCharacter)) {
      previousIndex = differenceNumbers(searchIndex, 1)
      previousCharacter = getValue(lineIsp, previousIndex)
      if (arentSame(',', previousCharacter)) {
       thirdTerm = ''
       searchIndex = addNumbers(searchIndex, 1)
       while (firstGreater(lineSize, searchIndex)) {
        currentCharacter = getValue(lineIsp, searchIndex)
        thirdTerm = concatenateStrings(thirdTerm, currentCharacter)
        searchIndex = addNumbers(searchIndex, 1)
       }
       outputString = concatenateStrings('specialConcatenation(', firstTerm)
       outputString = concatenateStrings(outputString, ', ')
       outputString = concatenateStrings(outputString, secondTerm)
       outputString = concatenateStrings(outputString, ', ')
       outputString = concatenateStrings(outputString, thirdTerm)
       outputString = concatenateStrings(outputString, ')')
       return outputString
      }
     }
     secondTerm = concatenateStrings(secondTerm, currentCharacter)
     searchTerm = addNumbers(searchTerm, 1)
    }
   }
  }
  firstTerm = concatenateStrings(firstTerm, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
 outputString = concatenateString('singleSlice(', firstTerm)
 outputString = concatenateString(outputString, ')')
 return outputString
}


utility_functions =
  
`
function addNumbers (number1, number2) {
 sumNumbers = number1 + number2
 return sumNumbers
}

function differenceNumbers (number1, number2) {
 ouputValue = number1 - number2
 return outputValue
}

function getValue (objectName, keyName) {
 outputValue = objectName[keyName]
 return outputValue
}

function concatenateStrings (string1, string2) {
 outputValue = string1 + string2
 return outputValue
}

function firstGreater (item1, item2) {
 conditionMet = item1 > item2
 return conditionMet
}

function singleSlice (stringValue) {
 outputValue = ''
 searchIndex = 1
 stringSize = getValue(stringValue, 'length')
 while (firstGreater(stringSize, searchIndex)) {
  currentCharacter = getValue(stringValue, searchIndex)
  outputValue = concatenateStrings(outputValue, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
 return outputValue
}

function specialConcatenation (removedEnding, newEnding, originalString) {
 originalSize = getValue(originalString, 'length')
 removedSize = getValue(removedEnding, 'length')
 endDistance = differenceNumbers(removedSize, 1)
 replacementIndex = differenceNumbers(originalSize, endDistance)
 searchIndex = 0
 outputString = ''
 searchEnd = addNumbers(originalSize, 1)
 while (firstGreater(searchEnd, searchIndex)) {
  currentCharacter = getValue(originalString, searchIndex)  
  if (areSame(searchIndex, replacementIndex)) {
   newSize = getValue(newEnding, 'length')
   searchIndex = 0
   while (firstGreater(newSize, searchIndex)) {
    currentCharacter = getValue(newEnding, searchIndex)
    outputString = concatenateStrings(outputString, currentCharacter)
    searchIndex = addNumbers(searchIndex, 1)
   }
   return outputString
  }
  outputString = concatenateStrings(outputString, currentCharacter)
  searchIndex = addNumbers(searchIndex, 1)
 }
}

function arentSame (item1, item2) {
 conditionMet = item1 === item2
 return conditionMet
}

function areSame (item1, item2) {
 conditionMet = item1 === item2
 return conditionMet
}

function multiplyNumbers (number1, number2) {
 productNumbers = number1 * number2
 return productNumbers
}

function setValue (objectName, keyName, valueValue) {
 objectName[keyName] = valueValue
}

function roundNumber (inputNumber) {
 outputNumber = Math.round(inputNumber)
 return outputNumber
}

function quotientNumbers (number1, number2) {
 outputNumber = number1 / number2
 return outputNumber
}
`


