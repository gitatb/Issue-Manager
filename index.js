/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
    app.log.info('Yay, the app was loaded!')

    // This generates an issue comment for with a binary option.
    app.on('issues.opened', async context => {
        const commentString = [
            'Thank you for opening this issue!',
            'Is this a bug? If it is, please add the bug label',
            'Or, is this a feature request? If it is please use the enhancement Label.'
        ].join('\n\n')
        const issueComment = context.issue({ body: commentString })
        return context.github.issues.createComment(issueComment)
    })


    // This clause executes based on the label selected, and then assigned to the appropriate contact.
    app.on([
        'issues.labeled',
    ], async context => {

        console.log("Label: "+ context.payload.label.name);

        let commentString = '';
        switch(context.payload.label.name) {
            case "bug":
                commentString = '@daenerysfirstofhername a new bug might have been caught.'
                break;
            case "enhancement":
                commentString = '@drogonlastofhiskind there is a new feature enhancement suggestion.'
                break;
            default:
                break;
        }

        if (commentString !== ''){
            const issueComment = context.issue({ body: commentString })
            return context.github.issues.createComment(issueComment)
        }
    })

    // TODO: Handle editing & deleting of labels in the future.
    app.on([
        'issues.unlabeled',
        'issues.edited',
    ], () => {
        console.log('We currently do not support any actions with deleted / edited labels')
    })

}
