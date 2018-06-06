class Driver {
  constructor(name, date){
    this.name = name
    this.date = date
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let verticalTravelled = 0;
    let horizontalTravelled = 0;
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let startIndex = 0
    let endIndex = 0

    if (this.beginningLocation.vertical > this.endingLocation.vertical) {
      verticalTravelled = this.beginningLocation.vertical - this.endingLocation.vertical
    } else {
      verticalTravelled = this.endingLocation.vertical - this.beginningLocation.vertical
    }

    for (let i = 0; i < eastWest.length; i++) {
      if (this.beginningLocation.horizontal === eastWest[i]) {
        startIndex = i
      }
      if (this.endingLocation.horizontal === eastWest[i]) {
        endIndex = i
      }
    }

    if (startIndex > endIndex) {
      horizontalTravelled = startIndex - endIndex
    } else {
      horizontalTravelled = endIndex - startIndex
    }

    let totalTravelled = verticalTravelled + horizontalTravelled
    return totalTravelled
  }

  estimatedTime(bool) {
    if(bool === true) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }

}
