let mockDB = [{id: 0, created_date: Date.now()}];

const services = {
  list: function() {
    if (localStorage.ideas) {
//      mockDB = localStorage.ideas;
    }
    return mockDB;
  },
  create: function() {
    mockDB.push({
      id: mockDB.length,
      created_date: Date.now()
    });
    return mockDB[mockDB.length-1];
  },
  update: function(idea) {
    mockDB = [
      ...mockDB.filter(item => item.id != idea.id),
      idea
    ];
    console.log(mockDB)
    this.sync();
    return idea;
  },
  delete: function(ideaId) {
    mockDB = mockDB.map(item => item.id != ideaId);
    this.sync();
    return {id: ideaId};
  },
  sync: function() {
    localStorage.setItem('ideas', mockDB);
  }
}

export default services;
