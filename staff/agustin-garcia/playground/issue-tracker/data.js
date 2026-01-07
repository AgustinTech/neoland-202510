class Data {
    constructor() {
        this.issues = []
        this.issuesCount = 0
    }

    insertIssue(issue) {
        this.issues.push(issue)
        this.issuesCount++
    }

    getIssues() {
        return this.issues
    }
}

// instance

const data = new Data()