import {
  Table,
  Column,
  Model,
  UpdatedAt,
  CreatedAt,
} from 'sequelize-typescript';

@Table
export class Record extends Model<Record> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  text: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
