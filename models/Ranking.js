const mongoose = require('mongoose');

const RankingSchema = new mongoose.Schema(
        {
          
          record: Number,
          old_record: Number,
		      _idUser: {
                 type: mongoose.Schema.Types.ObjectId, 
                 required: true
              }
        },
         { timestamps: true }
);

module.exports = mongoose.model('Ranking', RankingSchema);