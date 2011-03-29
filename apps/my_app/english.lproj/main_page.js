// ==========================================================================
// Project:   MyApp - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals MyApp */

// This page describes the main user interface for your application.  
MyApp.mainPage = SC.Page.design({
 
  mainPane: SC.MainPane.design({
 
    defaultResponder: 'MyApp.statechart',
 
    childViews: 'labelView logoutButtonView'.w(),
 
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      value: "_You are logged in!".loc()
    }),
 
    logoutButtonView: SC.ButtonView.design({
      layout: { centerX: 0, centerY: 28, width: 150, height: 24 },
      title: 'Logout',
      action: 'signout'
    }),
  }),
 
});
