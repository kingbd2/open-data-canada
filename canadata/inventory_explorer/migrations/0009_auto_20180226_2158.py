# Generated by Django 2.0.2 on 2018-02-26 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory_explorer', '0008_auto_20180226_2116'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventory',
            name='ref_number',
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
    ]