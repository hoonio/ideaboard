let mockDB = [{id: 0, created_date: Date.now()}];

const services = {
  list: function() {
    if (localStorage.ideas) {
      mockDB = localStorage.ideas;
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
    mockDB.find(item => item.id === idea.id).map(updateItem => {
      updateItem.id,
      updateItem.created_date,
      idea.title,
      idea.body
    });
    this.sync();
    return idea;
  },
  delete: function(idea) {
    mockDB = mockDB.map(item => item.id != idea.id);
    this.sync();
    return {id: idea.id};
  },
  sync: function() {
    localStorage.setItem('ideas', mockDB);
  }
}

export default services;
